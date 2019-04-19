
	if (Tone.context.state !== "running"){
		Tone.context.resume();
	}

	//attach a click listener to a play button
	document.querySelector('#sound_on_off_button').addEventListener('click', () => {
		console.log("sound is now ON")
		Tone.start()
	})

	//a 4 voice Synth
	var ChordLength = 4;
	var polySynth = new Tone.PolySynth(ChordLength, Tone.Synth);
	var pluckSynth = new Tone.MonoSynth(1, Tone.Synth);
	var gain  = new Tone.Gain(0.1);
	polySynth.connect(gain);
	pluckSynth.connect(gain);
	gain.toMaster();

	var sampler = new Tone.Sampler({
		"21" : "./piano/A0.[mp3|ogg]",
		"24" : "./piano/C1.[mp3|ogg]",
		"27" : "./piano/Ds1.[mp3|ogg]",
		"30" : "./piano/Fs1.[mp3|ogg]",
		"A1" : "./piano/A1.[mp3|ogg]",
		"C2" : "./piano/C2.[mp3|ogg]",
		"Ds2" : "./piano/Ds2.[mp3|ogg]",
		"Fs2" : "./piano/Fs2.[mp3|ogg]",
		"A2" : "./piano/A2.[mp3|ogg]",
		"C3" : "./piano/C3.[mp3|ogg]",
		"Ds3" : "./piano/Ds3.[mp3|ogg]",
		"Fs3" : "./piano/Fs3.[mp3|ogg]",
		"A3" : "./piano/A3.[mp3|ogg]",
		"C4" : "./piano/C4.[mp3|ogg]",
		"Ds4" : "./piano/Ds4.[mp3|ogg]",
		"Fs4" : "./piano/Fs4.[mp3|ogg]",
		"A4" : "./piano/A4.[mp3|ogg]",
		"C5" : "./piano/C5.[mp3|ogg]",
		"Ds5" : "./piano/Ds5.[mp3|ogg]",
		"Fs5" : "./piano/Fs5.[mp3|ogg]",
		"A5" : "./piano/A5.[mp3|ogg]",
		"C6" : "./piano/C6.[mp3|ogg]",
		"Ds6" : "./piano/Ds6.[mp3|ogg]",
		"Fs6" : "./piano/Fs6.[mp3|ogg]",
		"A6" : "./piano/A6.[mp3|ogg]"
	}, function(){
		//sampler will repitch the closest sample
		sampler.triggerAttack("A0"),
		sampler.triggerAttack("C1"),
		sampler.triggerAttack("Ds1"),
		sampler.triggerAttack("Fs1"),
		sampler.triggerAttack("A1"),
		sampler.triggerAttack("C2"),
		sampler.triggerAttack("Ds2"),
		sampler.triggerAttack("Fs2"),
		sampler.triggerAttack("A2"),
		sampler.triggerAttack("C3"),
		sampler.triggerAttack("Ds3"),
		sampler.triggerAttack("Fs3"),
		sampler.triggerAttack("A3"),
		sampler.triggerAttack("C4"),
		sampler.triggerAttack("Ds4"),
		sampler.triggerAttack("Fs4"),
		sampler.triggerAttack("A4"),
		sampler.triggerAttack("C5"),
		sampler.triggerAttack("Ds5"),
		sampler.triggerAttack("Fs5"),
		sampler.triggerAttack("A5"),
		sampler.triggerAttack("C6"),
		sampler.triggerAttack("Ds6"),
		sampler.triggerAttack("Fs6"),
		sampler.triggerAttack("A6")
	});

	sampler.set({
		"attack" : 0.0,
		"release": 1.6,
		"onload"  : Tone.noOp,
 		"baseUrl" : "./piano/",
		"curve"  : "linear"
	});

	pluckSynth.set({
		"envelope" : {
			"attack" : 0.005,
			"decay" : 2.97,
			"sustain" : 0.29,
			"release": 0.01,
		"attackCurve" : "linear",
			"decayCurve"  : "exponential",
			"releaseCurve"  : "exponential"
		},
		"oscillator": {
			"type": "square8"
		},
		"polyphony"  : 1 ,
 		"filter" :{
 			"Q": 3,
 			"type": "lowpass",
 			"rolloff"  : -24
 		},
		"modulation"  : {
			"type"  : "triangle",
			"harmonicity": 1.5
		},
		"filterEnvelope"  : {
			"attack"  : 0.02 ,
			"decay"  : 0.4 ,
			"sustain"  : 1 ,
			"release"  : 0.7 ,
			"octaves"  : 5 ,
			"attackCurve" : "linear",
			"decayCurve"  : "exponential",
			"releaseCurve"  : "linear"
		}
	});


	//play a chord

	polySynth.set({
		//"octaves"  : 1.5,

		"harmonicity" : 3,
		"modulationIndex" : 10,

		"oscillator" : {
					"type" : "triangle",
					"count" : 3,
					"spread" : 30
				},

		"envelope" : {
			
			"attack" : 0.1,
			"decay" : 2,
			"release" : 0.0001,
			"attackCurve" : "exponential",
			"releaseCurve"  : "linear"
		},

		"filter" :{
 			"Q": 0.5,
 			"frequency"  : 1000 ,
 			"type": "bandpass",
 			"rolloff"  : -12
 		},

 		"filterEnvelope"  : {
			"attack"  : 0.03 ,
			"decay"  : 0.9 ,
			"sustain"  : 0.4 ,
			"release"  : 0.01 ,
			"octaves"  : 5 ,
			"attackCurve" : "linear",
			"decayCurve"  : "exponential",
			"releaseCurve"  : "linear"
		},

		"modulation"  : {
			"type"  : "square"
		}  ,
		"modulationEnvelope"  : {
			"attack"  : 0.015 ,
			"decay"  : 1.5 ,
			"sustain"  : 0.11 ,
			"release"  : 0.01
		}
		

	});





	render_sound = function (note, length){
		ChordLength = length;
		console.log("chordlength:", ChordLength);
		sampler.triggerRelease(Tone.Midi(note).toFrequency() );
		sampler.triggerAttack(Tone.Midi(note).toFrequency() );



	}

	render_bass = function (note){
		pluckSynth.triggerRelease(Tone.Midi(note).toFrequency() );
		pluckSynth.triggerAttack(Tone.Midi(note).toFrequency() );

		

	}

