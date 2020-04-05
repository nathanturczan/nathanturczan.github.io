if (Tone.context.state !== "running"){
	Tone.context.resume();
}

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

var ChordLength = 4;

var sampler = new Tone.PolySynth(ChordLength, Tone.Sampler, {
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
		}, 
		{
			"baseUrl" : "https://tonejs.github.io/examples/audio/salamander/",
			'release' : 1,
			'onload' : function(){
			//callback after all the samples are loaded
			}
		}).toMaster();

	sampler.set({
		"attack" : 0.0,
		"curve"  : "linear"
	});







	render_sound = function (note, length){
		ChordLength = length;
		console.log("chordlength:", ChordLength);
		sampler.triggerRelease(Tone.Midi(note).toString() );
		sampler.triggerAttack(Tone.Midi(note).toString() );



	}

	render_bass = function (note){


		

	}
