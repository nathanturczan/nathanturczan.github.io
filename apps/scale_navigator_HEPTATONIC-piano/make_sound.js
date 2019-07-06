
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
		"33" : "./piano/A1.[mp3|ogg]",
		"36" : "./piano/C2.[mp3|ogg]",
		"39" : "./piano/Ds2.[mp3|ogg]",
		"42" : "./piano/Fs2.[mp3|ogg]",
		"45" : "./piano/A2.[mp3|ogg]",
		"48" : "./piano/C3.[mp3|ogg]",
		"51" : "./piano/Ds3.[mp3|ogg]",
		"54" : "./piano/Fs3.[mp3|ogg]",
		"57" : "./piano/A3.[mp3|ogg]",
		"60" : "./piano/C4.[mp3|ogg]",
		"63" : "./piano/Ds4.[mp3|ogg]",
		"66" : "./piano/Fs4.[mp3|ogg]",
		"69" : "./piano/A4.[mp3|ogg]",
		"72" : "./piano/C5.[mp3|ogg]",
		"75" : "./piano/Ds5.[mp3|ogg]",
		"78" : "./piano/Fs5.[mp3|ogg]",
		"81" : "./piano/A5.[mp3|ogg]",
		"84" : "./piano/C6.[mp3|ogg]",
		"87" : "./piano/Ds6.[mp3|ogg]",
		"90" : "./piano/Fs6.[mp3|ogg]",
		"93" : "./piano/A6.[mp3|ogg]"
	}, function(){
		//sampler will repitch the closest sample
		sampler.triggerAttack("21"),
		sampler.triggerAttack("24"),
		sampler.triggerAttack("27"),
		sampler.triggerAttack("30"),
		sampler.triggerAttack("33"),
		sampler.triggerAttack("36"),
		sampler.triggerAttack("39"),
		sampler.triggerAttack("42"),
		sampler.triggerAttack("45"),
		sampler.triggerAttack("48"),
		sampler.triggerAttack("51"),
		sampler.triggerAttack("54"),
		sampler.triggerAttack("57"),
		sampler.triggerAttack("60"),
		sampler.triggerAttack("63"),
		sampler.triggerAttack("66"),
		sampler.triggerAttack("69"),
		sampler.triggerAttack("72"),
		sampler.triggerAttack("75"),
		sampler.triggerAttack("78"),
		sampler.triggerAttack("81"),
		sampler.triggerAttack("84"),
		sampler.triggerAttack("87"),
		sampler.triggerAttack("90"),
		sampler.triggerAttack("93")
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

