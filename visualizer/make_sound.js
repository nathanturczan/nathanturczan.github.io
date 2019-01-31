//attach a click listener to a play button
document.querySelector('#sound_on_off_button').addEventListener('click', () => {
	console.log("!!!")
	Tone.start()
})

//a 4 voice Synth
var polySynth = new Tone.PolySynth(7, Tone.Synth);
var gain  = new Tone.Gain(0.1);
polySynth.connect(gain);
gain.toMaster();


//play a chord

polySynth.set({
	//"octaves"  : 1.5,

	"harmonicity" : 3,
	"modulationIndex" : 10,

	"oscillator" : {
				"type" : "fatsawtooth",
				"count" : 3,
				"spread" : 30
			},

	"envelope" : {
		
		"attack" : 0.1,
		"decay" : 0.5,
		"release" : 0.0001,
		"attackCurve" : "exponential",
		"releaseCurve"  : "linear"
	},

	"modulation"  : {
		"type"  : "square"
	}  ,
	"modulationEnvelope"  : {
		"attack"  : 0.5 ,
		"decay"  : 0 ,
		"sustain"  : 1 ,
		"release"  : 0.5
	}, 
	

});



render_sound = function (note, voices){
	//polySynth.triggerRelease(Tone.Midi(note).toFrequency() );

	polySynth.triggerAttack(Tone.Midi(note).toFrequency() );

}
