
// decipher key up codes
function showUp(evt) {
    evt = (evt) ? evt : ((event) ? event : null);
    if (evt) {
        var text = "";
        document.getElementById("upKey").innerHTML = evt.keyCode;
        if (evt.charCode) {
            document.getElementById("upChar").innerHTML = evt.charCode;
        }
        document.getElementById("upShift").innerHTML = 
            evt.shiftKey? "true" : "false";
        document.getElementById("upCtrl").innerHTML = 
            evt.ctrlKey? "true" : "false";
        document.getElementById("upAlt").innerHTML = 
            evt.altKey? "true" : "false";
        document.getElementById("upMeta").innerHTML = 
            evt.metaKey? "true" : "false";
        return false;
    }
}

const scales = data["scales"]
const startingScale = scales["c_diatonic"]
curr_scale = "c_diatonic";

//var rand = myArray[Math.floor(Math.random() * data["scales"].length)];
//console.log(scales[rand]);

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;
};

function drawGradient() {
  background(0);
  noStroke();
  var radius = windowWidth;
  for (var r = radius; r > 0; --r) {
    fill(map(r, 0, windowHeight, 255, 0), map(r, 0, windowHeight, 255, 0), map(r, 0, windowHeight, 255, 0));
    ellipse(windowWidth/2, windowHeight/2, r*0.22, r*0.22);
  }
}

function mouseReleased() {
  // for (let i = 0; i < touch_data.length; i++){
  //   if (Math.abs(mouseX - touch_data[i].x) < touch_data[i].ssize && Math.abs(mouseY - touch_data[i].y) < touch_data[i].ssize){
  //       console.log(touch_data[i].k);
  //       var key = touch_data[i].k
  //       touch_data = []
  //       drawScale(key, windowWidth / 2, windowHeight / 2, 1, [], -1);
  //       return
  //   }
  // }
}

let last_shapes = []
let new_shapes = []
let animation_time;
// function mousePressed() {
//   // last_shapes = touch_data
//   animation_time = 0
//   for (let i = 0; i < touch_data.length; i++){
//     if (Math.abs(mouseX - touch_data[i].x) < touch_data[i].ssize && Math.abs(mouseY - touch_data[i].y) < touch_data[i].ssize){
//         console.log(touch_data[i].k);
//         var key = touch_data[i].k
//         new_shapes
//         touch_data = []
//         drawScale(key, windowWidth / 2, windowHeight / 2, 1, [], -1);
//         return
//     }
//   }
// }

let points, childPoints, finalPoints, choice;
function setup() {
	ellipseMode(RADIUS);
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  noFill()
  points = calculatePoints(width / 2, height / 2, 'c_diatonic', 1, 2)
}

function mousePressed() {
  // last_shapes = touch_data
  for (let i = 0; i < points.length; i++){
    let point = points[i]
    if (Math.abs(mouseX - point.x) < point.size && Math.abs(mouseY - point.y) < point.size){
        childPoints = calculatePoints(point.x, point.y, point.key, point.level, 3)
        finalPoints = calculatePoints(width / 2, height / 2, point.key, 1, 2)
        return
        // touch_data = []
        // drawScale(key, windowWidth / 2, windowHeight / 2, 1, [], -1);
        // return
    }
  }
}
function mouseReleased() {
  if ( childPoints && finalPoints ) {
    animating = true;
    animTime = 0;
  }
}


let animTime = 0;
let animating = false
function draw() {
  background(240);
  noFill()
  for( let i = 0; i < points.length; i++ ) {
    let point = points[i]
    fill(point.c)
    polygon(point.x, point.y, point.size, scales[point.key].adjacent_scales.length, scales[point.key].scale_class);
  }
  if ( childPoints ) {
    let animTheta = animTime / 60
    for( let i = 0; i < childPoints.length; i++ ) {
      let child = childPoints[i]
      let final = finalPoints[i]
      if ( child && final ) {
        let x = map(animTheta * animTheta * animTheta, 0, 1, child.x, final.x)
        let y = map(animTheta * animTheta * animTheta, 0, 1, child.y, final.y)
        let size = map(animTheta * animTheta * animTheta, 0, 1, child.size, final.size)
        fill(final.c)
        polygon(x, y, size, scales[child.key].adjacent_scales.length, scales[child.key].scale_class);
      }
    }
  }
  stroke(0, 0, 255)
  if ( animating ) {
    animTime++
  }

  if ( animTime == 60 ) {
    animating = false
    points = finalPoints
    childPoints = null
    animTime = 0
  }
}
/*
function draw() {
  background(0);
  for (let i = 0; i < touch_data.length; i++){
    let data = touch_data[i]
    let last = last_shapes[i]
    fill(data.col)
    // console.log(data)

    x = data.x
    y = data.y

    if ( data.l < 3 ) {
      polygon(x, y, data.ssize, scales[data.k].adjacent_scales.length, scales[data.k].scale_class);
    }
  }
  if ( animation_time < 60 ) {
    animation_time++
  }
}
*/

num_convert = {49 : 0, 50 : 1, 51 : 2, 52 : 3 , 53 : 4, 54 : 5};

function keyPressed()
{
    drawGradient();
    pick_scale(curr_scale);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * Math.floor(array.length));
}

function pick_scale(key) {
    touch_data = []

    index = num_convert[keyCode];

    if (index !== undefined && (index) < scales[key].adjacent_scales.length) {
        key = scales[key].adjacent_scales[index];
        curr_scale = key;
    }
    
    drawScale(key, windowWidth / 2, windowHeight / 2, 1, [], -1);

    function on_midi_success(midi) {
        console.log("MIDI connection was successful");
        midi.outputs.forEach(function (port, port_id) {
            if(port.name == "IAC Driver Robot"){
            for( let i = 0; i < 127; i++ ) {
                port.send([145, i, 0]);
            }
            var superset = scales[key]["chord_subsets"];
            

            var subset = superset[getRandomIndex(superset)];
            console.log(subset);
            console.log(voicings[subset]["root_transposed_to_zero"]);
            for(let i = 0; i < 4; i++){
                port.send([145, 60 + voicings[subset]["root_transposed_to_zero"][i], 127]);

            }}})
         
            
    }

    function on_midi_failure(error_code) {
        console.error("Could not connect to MIDI: error code " + error_code);
    }

    navigator.requestMIDIAccess().then(on_midi_success, on_midi_failure);
}

function polygon(x, y, radius, npoints, sClass) {
  angle = TWO_PI / npoints;
  beginShape();
  for ( let a = 0; a < TWO_PI; a += angle) {
    if (npoints == 3 || npoints == 6) {
        let sx = x + cos(a+(TWO_PI/12)) * radius;
        let sy = y + sin(a+(TWO_PI/12)) * radius;
        vertex(sx, sy);
    }
    if (npoints == 5 ) {
        let sx = x + cos(a+(TWO_PI/20)) * radius;
        let sy = y + sin(a+(TWO_PI/20)) * radius;
        vertex(sx, sy);
    }

    if (npoints == 4 ) {
        if (sClass == "acoustic"){
            vertex(x+radius, y+radius*0.5);
            vertex(x-radius, y+radius*0.5);
            vertex(x-radius, y-radius*0.5);
            vertex(x+radius, y-radius*0.5);
        }
        if (sClass == "harmonic_major"){
            vertex(x+radius, y+radius*0.25);
            vertex(x-radius, y+radius*1.25);
            vertex(x-radius, y-radius*0.25);
            vertex(x+radius, y-radius*1.75);
        }
        if (sClass == "harmonic_minor"){
            vertex(x+radius, y+radius*1.25);
            vertex(x-radius, y+radius*0.25);
            vertex(x-radius, y-radius*1.75);
            vertex(x+radius, y-radius*0.25);
        }
        
    }
  }
  endShape(CLOSE);
}

function hsvToRgb(h, s, v) {
  var r, g, b;

  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }

  return [ r * 255, g * 255, b * 255 ];
}



var note_names = ["c", "c#", "d", "e♭", "e", "f", "f#", "g", "g#", "a", "b♭", "b"];

//keep tally of wha's been printed so far
const nodes_visited = {};

var touch_data = [];

function crawlPoints(x, y, key, level, maxLevel, pointsArr) {
  const scale = scales[key]
  const numAdjacent = scale.adjacent_scales.length
  const distanceToAdjacent = 200 / level
  const size = 40 / level
  const c = hsvToRgb(map(scale.root, 11, 0, 0, 1), map(scale.root, 0, 11, 0.5, 1), map(level, 0, 4, 1, 0.2))
  if ( level < maxLevel ) {
    for ( let i = 0; i < numAdjacent; i++ ) {
      let angle = map(i, 0, numAdjacent, 0, TWO_PI)
      let newX = x + (sin(angle) * distanceToAdjacent)
      let newY = y + (cos(angle) * distanceToAdjacent)
      pointsArr.push(calculatePoints(newX, newY, scale.adjacent_scales[i], level + 1, maxLevel))
    }
  }
  pointsArr.push({ x, y, size, level, key, c })
}

function calculatePoints(x, y, key, level, maxLevel) {
  let descendantPoints = []
  crawlPoints(x, y, key, level, maxLevel, descendantPoints)
  return flatten(descendantPoints);
}

// flatten from https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript
function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

//pass angle into recersive function
function drawScale(key, x, y, level, ancestors, offset, nShapes) {
    //function drawscale(key, x, y, level, angle)
    //copy the array so that we dont modify the original with recucursion 
     ancestors = ancestors.slice();
    //add it to the ancestors array
    ancestors.push(key);
    

    let c = hsvToRgb(map(scales[key].root, 11, 0, 0, 1), map(scales[key].root, 0, 11, 0.5, 1), map(level, 0, 4, 1, 0.2))
    fill(c);
    const shape_size = (windowHeight*(0.1111) / level);

    //all of the babie
    let filt_adjacent_scales = scales[key].adjacent_scales;

    //filter out all ancestors

    filt_adjacent_scales = filt_adjacent_scales.filter(function(item){
    return ancestors.indexOf(item) === -1;

    });

    touch_data.push(
        {
            x: x,
            y: y,
            ssize: shape_size,
            k: key,
            l: level,
            col: c
        }
    );

    //color scheme by scale class
    // polygon(x, y, shape_size, scales[key].adjacent_scales.length, scales[key].scale_class);
  
    stroke(0);
    fill(255,255,255);
    const font_size = 30/level;
    textSize(font_size);
    // text(note_names[scales[key].root], x-(9 / level), y);
    //use symbols instead of printing out EVERYTHING
    //text()
    // text(scales[key].scale_class, x-(54 / level), y+(33 / level)); //print out scale class
    fill(0);

    if ( level > 3) {
        return 
    }

    for( let i = 0; i < filt_adjacent_scales.length; i++ ) {

        var angle;
        let divisor = pow(2, level);

        if(level == 1) {
            angle = map(i, 0, filt_adjacent_scales.length, 0, (TWO_PI));
        }
        else {
            // angle = map(i, 0, filt_adjacent_scales.length, 0, (PI)); 
            let middle = Math.round((filt_adjacent_scales.length - 1) / 2);
            let pos = i - middle;
            angle = map(pos, 0, filt_adjacent_scales.length, offset - (PI/divisor), offset + (PI/divisor)) + (PI/divisor);            
        }


        let theta = map(i, 0, scales[key].adjacent_scales.length, 0, (TWO_PI/(level*level)));
        if (level > 1 ){
            // angle = angle + theta;
        }
        let newX = x + sin(angle+TWO_PI) * ((windowWidth*0.25) / level ) ;
        let newY = y + cos(angle+TWO_PI) * ((windowHeight*0.25) / level ) ;
        //rotate(cos(TWO_PI/adjacent_scales.length));

        drawScale(filt_adjacent_scales[i], newX, newY, level + 1, ancestors, angle);


        stroke(hsvToRgb(map(scales[key].root, 11, 0, 0, 1), map(scales[key].root, 0, 11, 0.5, 1), map(level, 0, 4, 1, 0.4)));
        line(x, y, newX, newY);
        stroke(hsvToRgb(map(scales[key].root, 11, 0, 0, 1), map(scales[key].root, 0, 11, 0.5, 1), map(level, 0, 4, 1, 0.4)));
    }
}

