function on_midi_success(midi) {
    console.log("MIDI connection was successful");
    midi.outputs.forEach(function (port, port_id) {
        console.log(port.name);
        port.send([0b10010000, 64, 127]);
    });
}

function on_midi_failure(error_code) {
    console.error("Could not connect to MIDI: error code " + error_code);
}

navigator.requestMIDIAccess().then(on_midi_success, on_midi_failure);