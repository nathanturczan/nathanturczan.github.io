
const scales = data["scales"]
const startingScale = scales["c_diatonic"]
var canvas;
var curr_scale = "c_diatonic";
var lastclick;
var lastAutoPChange;
var autopilotIsRunning = false;



//p5 has keyReleased()
//p5 has windowResize() -- check this out later

function drawGradient() {
    background(255);
    
    //this sucks, use an png
    //or use the css gradient functions
}

function setup() {
    ellipseMode(RADIUS);
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    drawGradient();
    pick_scale(curr_scale);
    frameRate(30); //there are other ways to do timing, like setInterval()
}

//abstract the logic in here into separate classes
//

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
    pick_scale(key);
}




//make the keys navigate the same journey as the touch
//maybe just add 49 rather than using a dictionary
const num_convert = {49 : 0, 50 : 1, 51 : 2, 52 : 3 , 53 : 4, 54 : 5};




// function takes chord A and chord br
// returns true or false whether or not transition is OK

function mod(a,b){
    return((a%b)+b)%b;
}



var note_names = ["C", "D♭", "D", "E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B"];

function pick_scale(key) {

    index = num_convert[keyCode];

    if (index !== undefined && (index) < scales[key].adjacent_scales.length) {
        key = scales[key].adjacent_scales[index];
        curr_scale = key;
    }
    
    drawScale(key, windowWidth / 2, windowHeight / 2, 1, [], -1);
}

function polygon(x, y, radius, npoints, sClass) {
    noStroke();
  angle = TWO_PI / npoints;
  beginShape();
  for ( let a = 0; a < TWO_PI; a += angle) {
    if (npoints == 6) {
        let sx = x + cos(a+(TWO_PI/12)) * radius;
        let sy = y + sin(a+(TWO_PI/12)) * radius;
        vertex(sx, sy);
    }
    

    if (npoints == 12) {
        let sx = x + cos(a+(TWO_PI/24)) * radius;
        let sy = y + sin(a+(TWO_PI/24)) * radius;
        vertex(sx, sy);
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
        console.log("hey");
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
