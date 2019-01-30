//attach a click listener to a play button
document.querySelector('#sound_on_off_button').addEventListener('click', () => {
	console.log("!!!")
	Tone.start()
})

//a 4 voice Synth
var polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();
//play a chord
polySynth.triggerAttackRelease(["C4", "E4", "G4", "B4"], "2n");



render_sound = function (note){
	polySynth.triggerAttackRelease(Tone.Midi(note).toFrequency(), "1n");

}