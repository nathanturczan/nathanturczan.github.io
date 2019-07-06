
	if (Tone.context.state !== "running"){
		Tone.context.resume();
	}

	//attach a click listener to a play button
	document.querySelector('#sound_on_off_button').addEventListener('click', () => {
		console.log("sound is now ON")
		Tone.start()
	})




var sampler = new Tone.Sampler({
			"21" : "A0.[mp3|ogg]",
			"24" : "C1.[mp3|ogg]",
			"27" : "Ds1.[mp3|ogg]",
			"30" : "Fs1.[mp3|ogg]",
			"33" : "A1.[mp3|ogg]",
			"36" : "C2.[mp3|ogg]",
			"39" : "Ds2.[mp3|ogg]",
			"42" : "Fs2.[mp3|ogg]",
			"45" : "A2.[mp3|ogg]",
			"48" : "C3.[mp3|ogg]",
			"51" : "Ds3.[mp3|ogg]",
			"54" : "Fs3.[mp3|ogg]",
			"57" : "A3.[mp3|ogg]",
			"60" : "C4.[mp3|ogg]",
			"63" : "Ds4.[mp3|ogg]",
			"66" : "Fs4.[mp3|ogg]",
			"69" : "A4.[mp3|ogg]",
			"72" : "C5.[mp3|ogg]",
			"75" : "Ds5.[mp3|ogg]",
			"78" : "Fs5.[mp3|ogg]",
			"81" : "A5.[mp3|ogg]",
			"84" : "C6.[mp3|ogg]",
			"87" : "Ds6.[mp3|ogg]",
			"90" : "Fs6.[mp3|ogg]",
			"93" : "A6.[mp3|ogg]",
			"96" : "C7.[mp3|ogg]",
			"99" : "Ds7.[mp3|ogg]",
			"102" : "Fs7.[mp3|ogg]",
			"105" : "A7.[mp3|ogg]",
			"108" : "C8.[mp3|ogg]"
		}, {
			"baseUrl" : "https://tonejs.github.io/examples/audio/salamander/"
		});

	sampler.set({
		"attack" : 0.0,
		"release": 1.6,
		"onload": Tone.noOp ,
		"curve"  : "linear"
	});







	render_sound = function (note){
		sampler.triggerRelease(Tone.Midi(note).toFrequency() );
		sampler.triggerAttack(Tone.Midi(note).toFrequency() );



	}

	render_bass = function (note){


		

	}

