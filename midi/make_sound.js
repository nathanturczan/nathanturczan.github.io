
	if (Tone.context.state !== "running"){
		Tone.context.resume();
	}

	// attach a click listener to a play button
	// document.querySelector('#sound_on_off_button').addEventListener('click', () => {
	// 	console.log("sound is now ON");
	// 	Tone.start();
	// })

	var button = document.querySelector('#sound_on_off_button');

	var muted = true;

	button.addEventListener("click", function(){
  		if(muted){
    		Tone.start()
			Tone.Master.mute=false;
    		button.innerHTML = "pause";
  		} else {
    		Tone.Master.mute=true;
    		button.innerHTML = "play";
 		}
 		muted = !muted;
	});

	//a 4 voice Synth
	var ChordLength = 4;
	var polySynth = new Tone.PolySynth(ChordLength, Tone.Synth);
	var pluckSynth = new Tone.MonoSynth(1, Tone.Synth);
	var gain  = new Tone.Gain(0.1);
	polySynth.connect(gain);
	pluckSynth.connect(gain);
	gain.toMaster();


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
		//console.log("chordlength:", ChordLength);
		polySynth.triggerRelease(Tone.Midi(note).toFrequency() );
		polySynth.triggerAttack(Tone.Midi(note).toFrequency() );



	}

	render_bass = function (note){
		pluckSynth.triggerRelease(Tone.Midi(note).toFrequency() );
		pluckSynth.triggerAttack(Tone.Midi(note).toFrequency() );

		

	}

