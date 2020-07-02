

var notes = {
	e: ["E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B", "C", "C#", "D", "E♭", "E"],
	a: ["A♭", "A", "B♭", "B", "C", "C#", "D", "E♭", "E", "F", "F#", "G", "A♭", "A"],
	d: ["C#", "D", "E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B", "C", "C#", "D"],
	g: ["F#", "G", "A♭", "A", "B♭", "B", "C", "C#", "D", "E♭", "E", "F", "F#", "G"],
	b: ["B♭", "B", "C", "C#", "D", "E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B"]
}

for (var i=0; i < notes.e.length; i++){
	$('.mask.low-e ul').append('<li note='+notes.e[i]+'>'+notes.e[i]+'</li>')
	$('.mask.a ul').append('<li note='+notes.a[i]+'>'+notes.a[i]+'</li>')
	$('.mask.d ul').append('<li note='+notes.d[i]+'>'+notes.d[i]+'</li>')
	$('.mask.g ul').append('<li note='+notes.g[i]+'>'+notes.g[i]+'</li>')
	$('.mask.b ul').append('<li note='+notes.b[i]+'>'+notes.b[i]+'</li>')
	$('.mask.high-e ul').append('<li note='+notes.e[i]+'>'+notes.e[i]+'</li>')
}

var note_translate = ["C", "C#", "D", "E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B"];


function showNotes(notes){
	var note_letters = []
	for (let [index, value] of notes.entries()) {
		note_letters.push(note_translate[value]);
	}
	$('.guitar-neck .notes li').not('[note="'+"Z"+'"]').animate({opacity:0}, 0);
	for (var i=0; i < note_letters.length; i++){
		$('.guitar-neck .notes li[note="'+note_letters[i]+'"]').animate({opacity:1}, 0);	
		
		console.log(note_letters[i]);

	}
	


}

