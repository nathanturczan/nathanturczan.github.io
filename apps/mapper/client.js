
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var midi;
function on_midi_success(arg_midi) {
    console.log("MIDI connection was successful");
    midi = arg_midi;
}

function on_midi_failure(error_code) {
    console.error("Could not connect to MIDI: error code " + error_code);
}

navigator.requestMIDIAccess().then(on_midi_success, on_midi_failure);


function map_chan1_0to47(){
    
    if (!midi) {
        return;
    }     
    console.log("working?");
    midi.outputs.forEach(function (port, port_id) {
        if (port.name == "IAC Driver INTERSTICES"){

            //clear channel of all MIDI
            for( let i = 0; i < 127; i++ ) {
                port.send([146, i, 0]);
            }
            sleep(20);
            console.log("map it now!");
            //send range for mapping
            port.send([146, 0, 127]);
            port.send([146, 56, 127]);

            sleep(3000);
            console.log("mapping off");
            //clear channel of all MIDI
            for( let i = 0; i < 127; i++ ) {
                port.send([146, i, 0]);
            }   
        }
    });
}
