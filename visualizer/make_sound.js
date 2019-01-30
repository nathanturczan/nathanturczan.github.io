//attach a click listener to a play button
document.querySelector('#sound_on_off_button').addEventListener('click', () => {
	console.log("!!!")
	Tone.start()
})

//a 4 voice Synth
var polySynth = new Tone.PolySynth(6, Tone.Synth).toMaster();

//play a chord

polySynth.set({

	"envelope" : {
		
		"attack" : 0.1,
		"decay" : 0.5,
		"release" : 0.0001,
		"releaseCurve"  : "linear"
	}
});



render_sound = function (note){
	//polySynth.triggerRelease(Tone.Midi(note).toFrequency() );
	polySynth.triggerAttack(Tone.Midi(note).toFrequency() );

}
