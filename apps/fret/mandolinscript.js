var MandolinNotes = {
    g: ["F#", "G", "A♭", "A", "B♭", "B", "C", "C#", "D", "E♭", "E", "F", "F#", "G"],
    d: ["C#", "D", "E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B", "C", "C#", "D"],
    a: ["A♭", "A", "B♭", "B", "C", "C#", "D", "E♭", "E", "F", "F#", "G", "A♭", "A"],
    e: ["E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B", "C", "C#", "D", "E♭", "E"]

}

for (var i = 0; i < MandolinNotes.e.length; i++) {
    $('.mask.mando-g ul').append('<li note=' + MandolinNotes.g[i] + '>' + MandolinNotes.g[i] + '</li>')
    $('.mask.mando-d ul').append('<li note=' + MandolinNotes.d[i] + '>' + MandolinNotes.d[i] + '</li>')
    $('.mask.mando-a ul').append('<li note=' + MandolinNotes.a[i] + '>' + MandolinNotes.a[i] + '</li>')
    $('.mask.mando-e ul').append('<li note=' + MandolinNotes.e[i] + '>' + MandolinNotes.e[i] + '</li>')
}

var note_translate = ["C", "C#", "D", "E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B"];

function showMandolinNotes(notes) {
    var note_letters = []
    for (let [index, value] of notes.entries()) {
        note_letters.push(note_translate[value]);
    }
    $('.mandolin-neck .mando-notes li').not('[note="' + "Z" + '"]').animate({
        opacity: 0
    }, 0);
    for (var i = 0; i < note_letters.length; i++) {
        $('.mandolin-neck .mando-notes li[note="' + note_letters[i] + '"]').animate({
            opacity: 1
        }, 0);
        // console.log(note_letters[i]);
    }
}

