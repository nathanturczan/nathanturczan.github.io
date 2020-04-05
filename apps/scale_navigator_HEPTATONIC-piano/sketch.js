
const scales = data["scales"]
const startingScale = scales["c_diatonic"]
var canvas;
var curr_scale = "c_diatonic";
var lastclick;
var lastAutoPChange;
var autopilotIsRunning = false;
var selectedMidi;



//p5 has keyReleased()
//p5 has windowResize() -- check this out later

function drawGradient() {
    background(255);
    
    //this sucks, use an png
    //or use the css gradient functions
}

function setup() {

    document.getElementById("output_port_selector").addEventListener("change", function(evt) {
        selectedMidi = evt.target.value;
        console.log(selectedMidi);
    })

    ellipseMode(RADIUS);
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    drawGradient();
    pick_scale(curr_scale);
    frameRate(30); //there are other ways to do timing, like setInterval()
}

document.addEventListener('click', (evt) => {
	if ( evt.target && evt.target.className === "scale-superset-btn") {
		lastclick = frameCount;
    	autopilotIsRunning = false;
    	//console.log("touch data", touch_data);

	    touch_data = [];
	    drawGradient();
		const key = evt.target.innerHTML
		ga('send', 'event', 'scale_change', window.userID+"-"+key);
		pick_scale(key)
	}

})

function mouseClicked() {
    lastclick = frameCount;
    autopilotIsRunning = false;
    //console.log("touch data", touch_data);
    var key;
    for (let i = 0; i < touch_data.length; i++){
        if (Math.abs(mouseX - touch_data[i].x) < touch_data[i].ssize && Math.abs(mouseY - touch_data[i].y) < touch_data[i].ssize){
            key = touch_data[i].k;
            touch_data = [];
            drawGradient();
        }
    }
    if (key === undefined) {
        return;
    }
    ga('send', 'event', 'scale_change', window.userID+"-"+key);
    pick_scale(key);
}



function draw() {
    // if ((frameCount - lastclick) >= 500 && autopilotIsRunning == false ) {
    //     // generate random key here when autopilot is enabled
    //     // var randomKey = ....
    //     autopilot();
    //     // once autopilot is enabled - we need a boolean to say whether its running
    //     autopilotIsRunning = true;
        
    // }
    // else if ((frameCount - lastAutoPChange) >= 250 && autopilotIsRunning == true) {
    //     autopilot();
    // }
}

function autopilot() {
  lastAutoPChange = frameCount;
  drawGradient();

  // for random adjacent
  // keep track of last scale name
  // get random adjacent from last scale name
  // instead of random scale - get random adjacent from last randomKey
  var r = random(scale_names);


  //console.log("autoscale", r, scales[r]);

  pick_scale(r);
}

//make the keys navigate the same journey as the touch
//maybe just add 49 rather than using a dictionary
const num_convert = {49 : 0, 50 : 1, 51 : 2, 52 : 3 , 53 : 4, 54 : 5};

function keyPressed()
{
    //drawGradient();
    //pick_scale(curr_scale);

}

var midi;
function on_midi_success(arg_midi) {
    console.log("MIDI connection was successful");
    midi = arg_midi;

    const outputs = arg_midi.outputs;
    for (let output of outputs.values()){
        var opt = document.createElement("option");
        opt.text = output.name;
        document.getElementById("output_port_selector").add(opt);
    }
}


function on_midi_failure(error_code) {
    console.error("Could not connect to MIDI: error code " + error_code);
}

navigator.requestMIDIAccess().then(on_midi_success, on_midi_failure);


function killswitch(){
    //clean up this MIDI stuff later, abstract into a few functions
    console.log("KILLSWITCH SUCCESSFUL");
    if (!midi) {
        return;
    }
    midi.outputs.forEach(function (port, port_id) {
        if (port.name !== "IAC Driver INTERSTICES"){
            return;
        }
        for( let i = 0; i < 127; i++ ) {
            port.send([144, i, 0]);
        }
        for( let i = 0; i < 127; i++ ) {
            port.send([145, i, 0]);
        }
    });
}

// function takes chord A and chord br
// returns true or false whether or not transition is OK

function mod(a,b){
    return((a%b)+b)%b;
}

var jazz_filtering_enabled = true;

function randomize_jazz_filter() {
    jazz_filtering_enabled = Math.random() > 0.5;
}

var allowed_root_intervals = [true, true, true, true, true, true, true];
function is_valid_jazz_chord_progression(current_chord, next_chord){
    if (!jazz_filtering_enabled){
        return true
    }

    var root_interval =  Math.abs(mod((voicings[next_chord]["root"]-voicings[current_chord]["root"]+6), 12)-6);

    if (!allowed_root_intervals[root_interval]) {
        return false;
    }

    var current_position = metadata[voicings[current_chord].chord_type].position;
    var next_position = metadata[voicings[next_chord].chord_type].position;

    if (root_interval <= 2) {
        // root movements by whole-steps, half-steps or unison
        return current_position === next_position;
    }
    if (root_interval === 3 || root_interval === 4) {
        // root movements by minor thirds/ sixths, major thirds / sixths
        return true;
    }
    if (root_interval === 5) {
        // root movements by fourths or fifths
        return current_position !== next_position;
    }
    if (root_interval === 6) {
        // root movement by tritones, not allowed!!
        return true;
    }
}

var voice_leading_threshold = 9;
function score_smooth_voice_leading(current_chord, next_chord){
    var current_pitches = voicings[current_chord]["root_transposed_to_zero"];
    var next_pitches = voicings[next_chord]["root_transposed_to_zero"];

    var fitness_score = 0;
    current_pitches.forEach(function(pitch, index) {
        for(let interval = -2; interval <= 2; interval++){
            if (next_pitches.indexOf(pitch + interval) !== -1) {
                if (interval === 0) {
                    fitness_score += 2;
                } else {
                    fitness_score += 1;
                }
                if (Math.max.apply(null, current_pitches) === pitch) {
                    fitness_score += 2;
                }
                return;
            }
        }
    })
    return fitness_score;
}

var voice_leading_smoothness = 100;

var slice_size = 1;

var last_chord_name = 'b_13#9-110';

var note_names = ["C", "D♭", "D", "E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B"];

function pick_scale(key) {

    render_notation(key);
    index = num_convert[keyCode];

    if (index !== undefined && (index) < scales[key].adjacent_scales.length) {
        key = scales[key].adjacent_scales[index];
        curr_scale = key;
    }
    
    drawScale(key, windowWidth / 2, windowHeight / 2, 1, [], -1);

    

    //var chord_candidates = Object.keys(voicings);
    var chord_candidates = scales[key]["chord_subsets"];
    var before_chord_candidates_count = chord_candidates.length;
    // filter chord candidates JAZZ STYLE
    chord_candidates = chord_candidates.filter(function(candidate){
        return is_valid_jazz_chord_progression(last_chord_name, candidate);
    });

    chord_candidates = chord_candidates.sort(function (a, b) {
        var score_a = score_smooth_voice_leading(last_chord_name, a);
        var score_b = score_smooth_voice_leading(last_chord_name, b);
        if (score_a === score_b) {
            return 0;
        } else if (score_a < score_b) {
            return -1;
        } else if (score_a > score_b) {
            return 1;
        }
    });

    var after_chord_candidates = chord_candidates.length;
    // console.log("before:", before_chord_candidates_count, "after:", after_chord_candidates);
    // console.log(chord_candidates)

    slice_size = Math.floor(chord_candidates.length - chord_candidates.length*(voice_leading_smoothness/100));
    if (slice_size === 0){
        slice_size = 1;
    }
    var current_chord_name;
    if (slice_size >= chord_candidates.length) {
        current_chord_name = random(chord_candidates);
    } else {
        current_chord_name = random(chord_candidates.slice(slice_size));
    }
    //console.log("score:", score_smooth_voice_leading(last_chord_name, current_chord_name));
    var current_chord = voicings[current_chord_name];
    last_chord_name = current_chord_name;
    
    var newStr = current_chord["chord_type"].replace('_', '');
    newStr = newStr.replace(/-.*$/,"");
    //var newStr = current_chord["chord_type"].replace('-\?(.*)', '');
    document.getElementById("chord_name").innerHTML = note_names[current_chord["root"]]+" "+newStr;
    document.getElementById("chord_name").style.fontSize='25px';

    //document.getElementById('supersets').innerHTML = current_chord["scale_supersets"].join('<br>');
    document.getElementById('supersets').innerHTML = current_chord["scale_supersets"].map((scale) => `
    	<a href="javascript:;" class='scale-superset-btn'>${scale}</a>
   `).join('');


    render_bass(current_chord["root"]+36);
    

    for(let i = 0; i < current_chord["root_transposed_to_zero"].length; i++){
            random_chord_notes = current_chord["root_transposed_to_zero"][i];
            render_sound(48 + random_chord_notes, current_chord["root_transposed_to_zero"].length);
            
            
    }

    if (!midi) {
        return;
    }

    midi.outputs.forEach(function (port, port_id) {
        if (port.name == selectedMidi ) {

            for( let i = 0; i < 127; i++ ) {
                port.send([144, i, 0]);
            }
            for( let i = 0; i < 127; i++ ) {
                port.send([145, i, 0]);
            }

            for( let i = 0; i < 127; i++ ) {
                port.send([146, i, 0]);
            }
            port.send([146, scales[key].video_index-1, 127]); 
            console.log("video index:", scales[key].video_index-1);   
            port.send([145, current_chord["root"]+48, 127]);
            for(let i = 0; i < current_chord["root_transposed_to_zero"].length; i++){
                random_chord_notes = current_chord["root_transposed_to_zero"][i];
                port.send([144, Math.min(60 + random_chord_notes, 127), 127]);
            }
            
        }
        //console.log(current_chord["root_transposed_to_zero"]);

    });


    
}

function polygon(x, y, radius, npoints, sClass) {
    noStroke();
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
        if (sClass == "harmonic major"){
            vertex(x+radius, y+radius*0.25);
            vertex(x-radius, y+radius*1.25);
            vertex(x-radius, y-radius*0.25);
            vertex(x+radius, y-radius*1.75);
        }
        if (sClass == "harmonic minor"){
            vertex(x+radius, y+radius*1.25);
            vertex(x-radius, y+radius*0.25);
            vertex(x-radius, y-radius*1.75);
            vertex(x+radius, y-radius*0.25);
        }
        
    }
  }
  endShape(CLOSE);
}


//delete this later, use p5 native hsv mode
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

//keep tally of wha's been printed so far
const nodes_visited = {};

var touch_data = [];

//pass angle into recersive function
function drawScale(key, x, y, level, ancestors, offset) {
    //function drawscale(key, x, y, level, angle)
    //copy the array so that we dont modify the original with recursion
    ancestors = ancestors.slice();
    //add it to the ancestors array
    ancestors.push(key);
    

    fill(hsvToRgb(map((scales[key].root*7)%12, 11, 0, 0, 1), 
        map((scales[key].root*7)%12, 0, 11, 0.1, 0.5), 
        1));

    const shape_size = (windowHeight*(0.15) / level);

    //all of the babie
    let filt_adjacent_scales = scales[key].adjacent_scales;

    //filter out all ancestors

    filt_adjacent_scales = filt_adjacent_scales.filter(function(item){
    return ancestors.indexOf(item) === -1;

    });

    if (level < 3) {
        touch_data.push(
            {
                x: x,
                y: y,
                ssize: shape_size,
                k: key
            }
        );
    }

    //color scheme by scale class
    polygon(x, y, shape_size, scales[key].adjacent_scales.length, scales[key].scale_class);
  
    stroke(0);
    fill(0,0,0);
    const font_size_1 = 32/level;
    //textSize(font_size_1);
    //text(note_names[scales[key].root], x-(9 / level)-1, y-1);
    //text(scales[key].scale_class, x-(54 / level)-1, y+(33 / level)-1); //print out scale class
    fill(80,80,80);
    const font_size_2 = 30/level;
    textSize(font_size_2);
    text(note_names[scales[key].root], x-(9 / level), y);
    //use symbols instead of printing out EVERYTHING
    //text()
    text(scales[key].scale_class, x-(54 / level), y+(33 / level)); //print out scale class
    fill(0);

    if ( level > 1) {
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
        let newX = x + sin(angle+TWO_PI) * ((windowWidth*0.27) / level ) ;
        let newY = y + cos(angle+TWO_PI) * ((windowHeight*0.27) / level ) ;
        //rotate(cos(TWO_PI/adjacent_scales.length));

        

        drawScale(filt_adjacent_scales[i], newX, newY, level + 1, ancestors, angle);


        
    }
}

window.addEventListener("load", function(){
        //console.log("hey");
    document.getElementById("root0").addEventListener("change", function(){
        allowed_root_intervals[0] = document.getElementById("root0").checked;
    });
    document.getElementById("root1").addEventListener("change", function(){
        allowed_root_intervals[1] = document.getElementById("root1").checked;
    });
    document.getElementById("root2").addEventListener("change", function(){
        allowed_root_intervals[2] = document.getElementById("root2").checked;
    });
    document.getElementById("root3").addEventListener("change", function(){
        allowed_root_intervals[3] = document.getElementById("root3").checked;
    });
    document.getElementById("root4").addEventListener("change", function(){
        allowed_root_intervals[4] = document.getElementById("root4").checked;
    });
    document.getElementById("root5").addEventListener("change", function(){
        allowed_root_intervals[5] = document.getElementById("root5").checked;
    });
    document.getElementById("root6").addEventListener("change", function(){
        allowed_root_intervals[6] = document.getElementById("root6").checked;
    });
    document.getElementById("vlsmoothness").addEventListener("change", function(){
        voice_leading_smoothness = parseInt(document.getElementById("vlsmoothness").value, 10);

    })
}, false);
