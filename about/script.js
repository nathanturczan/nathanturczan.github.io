document.querySelector("button").addEventListener("click", async () => {
  await Tone.start();
  console.log("context started");
});

let player1 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-4-7.mp3",
  autostart: true,
  loop: true }).
toDestination();

let player2 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-1-5.mp3",
  playbackRate: 0.74915,
  autostart: true,
  loop: true }).
toDestination();

let player3 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-3-4.mp3",
  playbackRate: 1.25992,
  autostart: true,
  loop: true }).
toDestination();

let player4 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-1-6.mp3",
  playbackRate: 1.25992,
  autostart: true,
  loop: true }).
toDestination();

let player5 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-5-6.mp3",
  playbackRate: 1.12246,
  autostart: true,
  loop: true }).
toDestination();

let player6 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-4-8.mp3",
  autostart: true,
  loop: true }).
toDestination();

let player7 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-1-3.mp3",
  playbackRate: 1.25992,
  autostart: true,
  loop: true }).
toDestination();

let player8 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-1-4.mp3",
  playbackRate: 1.25992,
  autostart: true,
  loop: true }).
toDestination();

let player9 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-2-4.mp3",
  playbackRate: 0.8909,
  autostart: true,
  loop: true }).
toDestination();

let player10 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-2-3.mp3",
  autostart: true,
  loop: true }).
toDestination();

let player11 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-2-5.mp3",
  autostart: true,
  loop: true }).
toDestination();

let player12 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-2-7.mp3",
  autostart: true,
  loop: true }).
toDestination();

let player13 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-2-6.mp3",
  playbackRate: 0.7937,
  autostart: true,
  loop: true }).
toDestination();

let player14 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-3-5.mp3",
  autostart: true,
  loop: true }).
toDestination();

let player15 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-4-5.mp3",
  playbackRate: 0.8909,
  autostart: true,
  loop: true }).
toDestination();

let player16 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-3-6.mp3",
  playbackRate: 1.12246,
  autostart: true,
  loop: true }).
toDestination();

let player17 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-3-7.mp3",
  autostart: true,
  loop: true }).
toDestination();

let player18 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/0-4-6.mp3",
  playbackRate: 0.7937,
  autostart: true,
  loop: true }).
toDestination();

let player19 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/g-strwl.mp3",
  autostart: true,
  loop: true }).
toDestination();

let player20 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/c-bf.mp3",
  autostart: true,
  loop: true }).
toDestination();

let player21 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/neidealoop3.mp3",
  autostart: true,
  loop: true }).
toDestination();

let player22 = new Tone.Player({
  url: "https://assets.codepen.io/2173169/min33.mp3",
  playbackRate: 0.8909,
  autostart: true,
  loop: true }).
toDestination();

var players = [
player1,
player2,
player3,
player4,
player5,
player6,
player7,
player8,
player9,
player10,
player11,
player12,
player13,
player14,
player15,
player16,
player17,
player18];

var numPlayers = players.length;

player19.volume.value = -30; //-18;
player20.volume.value = -30;
player21.volume.value = -25;
player22.volume.value = -24;

player1.volume.value = Tone.gainToDb(0.375);
player2.volume.value = -Infinity;
player3.volume.value = -Infinity;
player4.volume.value = -Infinity;
player5.volume.value = -Infinity;
player6.volume.value = -Infinity;
player7.volume.value = -Infinity;
player8.volume.value = -Infinity;
player9.volume.value = -Infinity;
player10.volume.value = -Infinity;
player11.volume.value = -Infinity;
player12.volume.value = -Infinity;
player13.volume.value = -Infinity;
player14.volume.value = -Infinity;
player15.volume.value = -Infinity;
player16.volume.value = -Infinity;
player17.volume.value = -Infinity;
player18.volume.value = -Infinity;

let scene, camera, renderer, controls;
var spotLight;

const cloudmap = new THREE.TextureLoader().load(
"https://assets.codepen.io/2173169/cloud.png");

const cloudmaterial = new THREE.SpriteMaterial({ map: cloudmap, depthWrite: false, color: "blue", transparent: true, opacity: 0.9 });

const cloud = new THREE.Sprite(cloudmaterial);
cloud.scale.set(20, 10, 1);

const halomap = new THREE.TextureLoader().load(
"https://assets.codepen.io/2173169/sun-min.png");

const halomaterial = new THREE.SpriteMaterial({ map: halomap, depthWrite: false, transparent: true, opacity: 1 });

const halo = new THREE.Sprite(halomaterial);
halo.scale.set(20, 20, 1);

let mouse = {
  x: 0,
  y: 0 };


function getAspectRatio() {
  const { innerWidth, innerHeight } = window;
  return innerWidth / innerHeight;
}

function onResize() {
  camera.aspect = getAspectRatio();
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

var canvReference = document.getElementById("three_canvas");


function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(85, getAspectRatio(), 0.1, 1000);
  camera.position.z = 25;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: canvReference });
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = 0.1;

  spotLight = new THREE.SpotLight(0xffffff);

  scene.add(spotLight);
  scene.add(cloud);
  scene.add(halo);


  return new Promise((resolve, reject) => {
    const loader = new THREE.GLTFLoader();
    loader.crossOrigin = "";

    loader.load(
    "https://assets.codepen.io/2173169/nano_scan_2.gltf",
    gltf => {
      model = gltf.scene;
      scene.add(model);
      model.translateY(-7);
      var newMaterial = new THREE.MeshStandardMaterial({
        color: "blue",
        emissive: 'rgba(0, 0, 0, 0)',
        metalness: 1,
        roughness: 0.95,
        opacity: 0.1 });



      model.traverse(o => {
        if (o.isMesh) o.material = newMaterial;
      });
      window.addEventListener("resize", onResize);
      resolve();
    },
    undefined,
    reject);

  });
}

let orbit = 0;
let angle = 0;

function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function render() {
  controls.update();

  if (model) {
    model.rotation.x = (Math.PI / -2);
    model.rotation.y = -0.05;
  }

  angle += 0.002;

  if (spotLight) {
    spotLight.position.x = 100 * Math.cos(angle);
    spotLight.position.y = 100 * Math.sin(angle);
  }
  cloud.position.x = 12 * Math.cos(angle);
  cloud.position.z = 12 * Math.sin(angle);

  number = angle % (Math.PI * 2);
  orbit = scale(number, 0, Math.PI * 2, 0, 1);
  //console.log(orbit);

  let vol = parseFloat(orbit);

  //console.log(vol);
  if (vol > 1 / 18 * 8 && vol < 1 / 18 * 17) {
    document.getElementById("logo").src = "https://assets.codepen.io/2173169/eflat_logo3.png";
    player19.playbackRate = 1.05946;
    player21.playbackRate = 0.8909;
    player22.playbackRate = 0.94387;
    //want to ramp up to this value over the course of 2 seconds
  } else {
    document.getElementById("logo").src = "https://assets.codepen.io/2173169/bflatacou_logo3.png";
    player19.playbackRate = 1;
    player21.playbackRate = 1;
    player22.playbackRate = 0.8909;
  }

  var currentPlayer = Math.floor(numPlayers * vol);

  var frac = numPlayers * vol - currentPlayer;
  var nextPlayer = (currentPlayer + 1) % numPlayers;
  var currentPlayerVolume = Tone.gainToDb(
  Math.cos(frac * 0.5 * Math.PI) * 0.375);

  var nextPlayerVolume = Tone.gainToDb(Math.sin(frac * 0.5 * Math.PI) * 0.375);

  for (let player of players) {
    player.volume.value = -Infinity;
  }

  players[currentPlayer].volume.value = currentPlayerVolume;
  if (nextPlayer < numPlayers) {
    players[nextPlayer].volume.value = nextPlayerVolume;
  }

  halo.material.rotation = -angle % (Math.PI * 2);

  // cloud.position.x = 12 * Math.cos(angle);
  // cloud.position.z = 12 * Math.sin(angle);

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

init().then(render);