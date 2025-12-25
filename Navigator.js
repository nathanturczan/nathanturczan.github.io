// Navigator - Full interactive scale network
// Browser-compatible version

// --- Module state (must be resettable) ---
let scale = "c_diatonic";
let main_polygon;
let preview_polygons = [];
let hover_polygons = [];
let hover_polygons_to_be_removed = [];
let actually_new_polygons;
let last_clicked_polygon;
let old_neighbors;
let old_main_polygon;
let preview_polygons_ready = false;
let neighbors = [];
let poly_size = 61;
let isMemberMode = false;

// Autopilot state
const autopilot_data = {
  active: false,
  default_period: [1000, 2000, 3000, 4000],
  period: undefined,
  chosen: undefined,
  intervalID: undefined,
  animate: true,
  max_visited: 10,
  visited: [],
  chordClicks: 0,
};

// Helper: read BPM from the slider, with a safe default
const getAutopilotBpm = () => {
  const elm = document.getElementById("autopilot_interval");
  let bpmVal = 120; // default if slider missing/invalid
  if (elm) {
    const parsed = parseFloat(elm.value);
    if (!Number.isNaN(parsed) && parsed > 0) {
      bpmVal = parsed;
    }
  }
  return bpmVal;
};

// Keep named handler refs so we can remove them
let _jumpHandler = null;
let _autoHandler = null;

const setMemberMode = (on) => {
  isMemberMode = !!on;
};

// Full reset for WKWebView restores/unmounts
const resetNavigator = () => {
  if (autopilot_data.intervalID) {
    clearInterval(autopilot_data.intervalID);
    autopilot_data.intervalID = undefined;
  }
  if (_jumpHandler) {
    window.removeEventListener("jumpToScale", _jumpHandler, false);
    _jumpHandler = null;
  }
  if (_autoHandler) {
    window.removeEventListener("navigatorAutoPilot", _autoHandler, false);
    _autoHandler = null;
  }

  // Clear arrays/state
  preview_polygons = [];
  hover_polygons = [];
  hover_polygons_to_be_removed = [];
  actually_new_polygons = undefined;
  last_clicked_polygon = undefined;
  old_neighbors = undefined;
  old_main_polygon = undefined;
  preview_polygons_ready = false;
  neighbors = [];
  main_polygon = undefined;

  // Reset autopilot bits
  autopilot_data.active = false;
  autopilot_data.visited = [];
  autopilot_data.chordClicks = 0;
  autopilot_data.period = undefined;
  autopilot_data.chosen = undefined;

  console.log("[DBG nav.resetNavigator] done");
};

// Init
const init = ({ p5, setNavigatorData, setScaleData }) => {
  // Remove any stale listeners before re-adding
  if (_jumpHandler) window.removeEventListener("jumpToScale", _jumpHandler, false);
  if (_autoHandler) window.removeEventListener("navigatorAutoPilot", _autoHandler, false);

  _jumpHandler = (e) => {
    console.log("[DBG nav.init] jumpToScale event detail =", e.detail);
    jumpToScale({
      p5,
      newScale: e.detail.polygonScale, // MUST be polygonScale
      setScaleData,
      setNavigatorData,
      silent: !!e.detail.silent,
    });
  };
  _autoHandler = (e) => {
    toggle_autopilot(e.detail.state);
  };

  window.addEventListener("jumpToScale", _jumpHandler, false);
  window.addEventListener("navigatorAutoPilot", _autoHandler, false);

  init_autopilot({ p5, setScaleData, setNavigatorData });

  poly_size = (p5.width + p5.height) / 22;
  poly_size = p5.max(1200 / 22, poly_size);

  initPolygons({ p5, setNavigatorData });
  console.log("[DBG nav.init] initialized with scale =", scale);
};

const initPolygons = ({ p5, setNavigatorData }) => {
  main_polygon = new Polygon(p5, 0.5, 0.5, poly_size, scale);
  setNavigatorData({ main_polygon });

  neighbors = main_polygon.getNeighbors();
  old_main_polygon = undefined;
  old_neighbors = undefined;
  last_clicked_polygon = undefined;
  actually_new_polygons = undefined;
  hover_polygons = [];
  hover_polygons_to_be_removed = [];
  preview_polygons = [];

  console.log(
    "[DBG nav.initPolygons] main=",
    main_polygon?.scale,
    "neighbors=",
    (neighbors || []).map((n) => n.scale)
  );
};

const autopilotIntervanFunction = ({ p5, setScaleData, setNavigatorData }) => {
  if (!autopilot_data.active) return;

  // If member, constrain to main polygon only
  let p = isMemberMode ? main_polygon : p5.random(neighbors.concat(main_polygon));
  let passes = 0;

  while (!isMemberMode && autopilot_data.visited.includes(p) && passes < 100) {
    p = p5.random(neighbors.concat(main_polygon));
    passes++;
  }

// Slider value is BPM (20–240). Lock chord hops to beat multiples.
  const bpm = getAutopilotBpm();
  const beatMs = 60000 / bpm; // duration of a quarter note

  // Piano-comp style: choose between weak/strong beats:
  // 0.5, 1, 1.5, or 2 beats between chord events.
  const compBeatMultipliers = [4, 6, 8, 12, 16];
  autopilot_data.chosen = p5.random(
    compBeatMultipliers.map((m) => m * beatMs)
  );

  if (!isMemberMode && autopilot_data.chordClicks > p5.random(4, 8)) {
    if (autopilot_data.visited.length >= autopilot_data.max_visited) {
      autopilot_data.visited.pop();
    }
    autopilot_data.visited.unshift(p);
    autopilot_data.chordClicks = 0;
  } else {
    p = main_polygon; // always center when member
    autopilot_data.chordClicks++;
    // For "comping" on the main polygon, keep beat-locked but a bit tighter:
    const bpmMain = getAutopilotBpm();
    const beatMsMain = 60000 / bpmMain;
    const mainMultipliers = [4, 8, 16]; // offbeat or strong beat
    autopilot_data.chosen = p5.random(
      mainMultipliers.map((m) => m * beatMsMain)
    );
  }

  changeMainScale({
    p5,
    new_main: p,
    all_duration: Helper.default_animation_duration,
    animation: autopilot_data.animate,
    setScaleData,
    setNavigatorData,
  });

  set_autopilot_period({
    p5,
    new_period: autopilot_data.default_period,
    setScaleData,
    setNavigatorData,
  });
};

const init_autopilot = ({ p5, setScaleData, setNavigatorData }) => {
  if (!p5) return;

  if (autopilot_data.intervalID) {
    clearInterval(autopilot_data.intervalID);
    autopilot_data.intervalID = undefined;
  }

  if (!autopilot_data.period) autopilot_data.period = autopilot_data.default_period;

  // Initial beat-locked delay, same logic as in autopilotIntervanFunction
  const bpm = getAutopilotBpm();
  const beatMs = 60000 / bpm;
  const compBeatMultipliers = [4, 6, 8, 12, 16];
  autopilot_data.chosen = p5.random(
    compBeatMultipliers.map((m) => m * beatMs)
  );

  autopilot_data.intervalID = setInterval(
    autopilotIntervanFunction,
    autopilot_data.chosen,
    { p5, setScaleData, setNavigatorData }
  );
};

const toggle_autopilot = (forced_value = undefined) => {
  if (typeof forced_value === "boolean") {
    autopilot_data.active = forced_value;
  } else {
    autopilot_data.active = !autopilot_data.active;
  }
};

const reset_autopilot = () => {
  autopilot_data.active = false;
  autopilot_data.visited = [];
  autopilot_data.chordClicks = 0;
};

const set_autopilot_period = ({ p5, new_period, setScaleData, setNavigatorData }) => {
  autopilot_data.period = new_period;
  if (autopilot_data.intervalID) clearInterval(autopilot_data.intervalID);
  init_autopilot({ p5, setScaleData, setNavigatorData });
};

const navigatorDraw = ({ p5 }) => {
  try {
    p5.push();
    p5.ellipseMode(p5.RADIUS);

    for (let h = 0; h < hover_polygons.length; h++) {
      hover_polygons[h].draw(false);
    }

    const allPolygons = [main_polygon]
      .concat(preview_polygons || [], old_neighbors || [])
      .concat(neighbors || []);
    allPolygons.push(old_main_polygon);

    for (const p of allPolygons) {
      if (p) p.draw(true);
    }

    third_gen_hover(p5);
    p5.pop();
  } catch (error) {
    console.error(error);
  }
};

const navigatorMousePressed = ({ p5, setScaleData, event }) => {
  try {
    if (event.type === "mousedown") {
      if (main_polygon?.click()) {
        updateScaleState({ setScaleData, newScale: scale });
        return;
      }
      if (isMemberMode) return;

      for (const p of neighbors) {
        if (p && p.click() && !p.animation.active) {
          prepareChangeMainScale({ p5, p });
          return;
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
};

const navigatorMouseReleased = ({ setScaleData, setNavigatorData, event }) => {
  if (event.type === "mouseup") {
    if (isMemberMode) return;
    for (const p of neighbors) {
      if (p && p.click() && !p.animation.active && preview_polygons_ready) {
        finishChangeMainScale({ setScaleData, setNavigatorData, new_main: p });
        return;
      }
    }
  }
};

const third_gen_hover = (p5) => {
  for (let h = 0; h < hover_polygons_to_be_removed.length; h++) {
    hover_polygons.splice(hover_polygons_to_be_removed[h], 1);
    hover_polygons_to_be_removed.splice(hover_polygons_to_be_removed.indexOf(h), 1);
    hover_polygons_to_be_removed = hover_polygons_to_be_removed.map((x) => x - 1);
    h--;
  }

  for (const n of neighbors) {
    const clickData = n.click(p5.mouseX, p5.mouseY, true);
    if (clickData.start && !n.animation.active) {
      const add = get_new_neighbors(n).new;

      const total_poly = neighbors.length;
      const ind = main_polygon.getNeighbors().findIndex((x) => x.isMatching(n));
      const pos = n.getNeighborPositions(
        n.x,
        n.y,
        n.radius,
        undefined,
        undefined,
        p5.PI / 2 + (2 * p5.PI * (ind - 1)) / total_poly,
        p5.PI / 2 + (2 * p5.PI * (ind + 1)) / total_poly,
        add.length
      );

      for (let p = 0; p < add.length; p++) {
        add[p].set(["x", n.x], ["y", n.y], ["generated_from", n]);
        add[p].move(pos[p].x, pos[p].y, Helper.default_animation_duration / 2);
      }

      hover_polygons.push(...add);
    } else if (clickData.end) {
      for (const p of get_new_neighbors(n).new) {
        for (let h = 0; h < hover_polygons.length; h++) {
          if (hover_polygons[h].isMatching(p) && hover_polygons[h].generated_from === n) {
            const _h = hover_polygons[h];
            _h.move(
              n.x,
              n.y,
              Helper.default_animation_duration / 2,
              _h.radius,
              1,
              (id) => {
                hover_polygons_to_be_removed.push(id);
              },
              [h]
            );
          }
        }
      }
    }
  }
};

const prepareChangeMainScale = ({ p5, p, animation = false }) => {
  last_clicked_polygon = p;
  hover_polygons = [];

  const pl = get_new_neighbors(p);
  actually_new_polygons = pl.new;
  preview_polygons = pl.preview;

  const total_poly = neighbors.length;
  const ind = main_polygon.getNeighbors().findIndex((x) => x.isMatching(p));

  if (ind >= 0) {
    const positions = p.getNeighborPositions(
      p.x,
      p.y,
      p.radius,
      undefined,
      undefined,
      p5.PI / 2 + (2 * p5.PI * (ind - 1)) / total_poly,
      p5.PI / 2 + (2 * p5.PI * (ind + 1)) / total_poly,
      actually_new_polygons.length
    );

    for (let a_n = 0; a_n < actually_new_polygons.length; a_n++) {
      const pol = preview_polygons.find((x) => actually_new_polygons[a_n].isMatching(x));
      pol.set(["x", positions[a_n].x], ["y", positions[a_n].y], ["size", positions[a_n].size]);
    }

    if (animation) {
      for (const prev of actually_new_polygons) {
        const oldx = prev.x;
        const oldy = prev.y;
        prev.set(["x", p.x], ["y", p.y]);
        prev.move(oldx, oldy, prev.size);
      }
    }

    preview_polygons_ready = true;
  }
};

const get_new_neighbors = (p) => {
  const prev_poly = p.getNeighbors();
  const all_current = neighbors.concat([main_polygon]);
  const acc_new_poly = new Set();

  for (let n = 0; n < all_current.length; n++) {
    for (let pre = 0; pre < prev_poly.length; pre++) {
      if (all_current[n].isMatching(prev_poly[pre])) {
        prev_poly[pre] = all_current[n];
      }
    }
  }

  for (let i = 0; i < prev_poly.length; i++) {
    if (!all_current.includes(prev_poly[i])) {
      acc_new_poly.add(prev_poly[i]);
    }
  }

  return {
    new: Array.from(acc_new_poly),
    preview: prev_poly,
  };
};

const finishChangeMainScale = ({
  setNavigatorData,
  new_main,
  all_duration = Helper.default_animation_duration,
  setScaleData,
}) => {
  old_neighbors = [...neighbors];
  old_main_polygon = main_polygon;
  setNavigatorData({ old_main_polygon: main_polygon });

  main_polygon = new_main;
  setNavigatorData({ main_polygon: new_main });

  neighbors = preview_polygons;

  // remove duplicate of the new main from old_neighbors
  const idx = old_neighbors.indexOf(main_polygon);
  if (idx !== -1) old_neighbors.splice(idx, 1);

  const dupIndex = neighbors.findIndex((x) => old_main_polygon.isMatching(x));
  if (dupIndex !== -1) neighbors[dupIndex] = old_main_polygon;

  main_polygon.move(0.5, 0.5, all_duration, poly_size);

  const positions = main_polygon.getNeighborPositions(0.5, 0.5, poly_size);
  for (let i = 0; i < neighbors.length; i++) {
    try {
      neighbors[i].move(positions[i].x, positions[i].y, all_duration, positions[i].size, 1);
    } catch (e) {
      console.error(e);
    }
  }

  for (const old of old_neighbors) {
    if (neighbors.findIndex((x) => old.isMatching(x)) === -1) {
      old.move(
        old_main_polygon.animation.target.x,
        old_main_polygon.animation.target.y,
        all_duration,
        0,
        1
      );
    }
  }

  if (actually_new_polygons) {
    for (const prev of actually_new_polygons) {
      if (!prev.animation.active) prev.move(last_clicked_polygon.x, last_clicked_polygon.y, 1, 0);
    }
  }

  preview_polygons_ready = false;

  updateScaleState({ setScaleData, newScale: main_polygon.scale });
};

const changeMainScale = ({
  p5,
  new_main,
  all_duration = Helper.default_animation_duration,
  animation = false,
  setScaleData,
  setNavigatorData,
}) => {
  prepareChangeMainScale({ p5, p: new_main, animation });
  finishChangeMainScale({ p5, new_main, all_duration, setScaleData, setNavigatorData });
};

// NOTE: now respects `silent`. When true, we do NOT emit setScaleData nor Firebase.
const updateScaleState = ({ setScaleData, newScale, silent = false }) => {
  scale = newScale;
  console.log("[DBG nav.updateScaleState] →", scale, "silent:", silent);

  if (silent) return;

  // Mark this change as coming from the navigator so Pfivesketch ignores it
  if (typeof window !== "undefined") {
    window.__lastScaleOrigin = "navigator";
  }

  // Dispatch Redux (this regenerates a chord)
  setScaleData(newScale);

  // Firestore sync if available
  if (typeof window !== "undefined" && window.setFirebaseScaleData) {
    window.setFirebaseScaleData(newScale);
  }

  // Clear the origin on the next tick so future redux changes aren't hidden
  if (typeof window !== "undefined") {
    setTimeout(() => {
      if (window.__lastScaleOrigin === "navigator") {
        window.__lastScaleOrigin = undefined;
      }
    }, 0);
  }
};

const jumpToScale = ({
  p5,
  newScale,
  setScaleData,
  setNavigatorData,
  silent = false,
}) => {
  console.log("[DBG nav.jumpToScale] in:", { newScale, silent, cur: scale });
  if (!newScale || !ScaleData[newScale]) {
    console.warn("[Navigator] ignoring invalid scale:", newScale);
    return;
  }

  if (newScale !== scale) {
    // When silent, only update local state; no chord regen, no Firebase write.
    updateScaleState({ newScale, setScaleData, silent });
    // Rebuild polygons so visuals reflect the new main scale.
    initPolygons({ p5, setNavigatorData });
    console.log("[DBG nav.jumpToScale] after initPolygons main=", main_polygon?.scale);
  }
};