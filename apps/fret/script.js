

var GuitarNotes = {
    e: ["E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B", "C", "C#", "D", "E♭", "E"],
    a: ["A♭", "A", "B♭", "B", "C", "C#", "D", "E♭", "E", "F", "F#", "G", "A♭", "A"],
    d: ["C#", "D", "E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B", "C", "C#", "D"],
    g: ["F#", "G", "A♭", "A", "B♭", "B", "C", "C#", "D", "E♭", "E", "F", "F#", "G"],
    b: ["B♭", "B", "C", "C#", "D", "E♭", "E", "F", "F#", "G", "A♭", "A", "B♭", "B"]
}

for (var i = 0; i < GuitarNotes.e.length; i++) {
    $('.mask.low-e ul').append('<li note=' + GuitarNotes.e[i] + '>' + GuitarNotes.e[i] + '</li>')
    $('.mask.a ul').append('<li note=' + GuitarNotes.a[i] + '>' + GuitarNotes.a[i] + '</li>')
    $('.mask.d ul').append('<li note=' + GuitarNotes.d[i] + '>' + GuitarNotes.d[i] + '</li>')
    $('.mask.g ul').append('<li note=' + GuitarNotes.g[i] + '>' + GuitarNotes.g[i] + '</li>')
    $('.mask.b ul').append('<li note=' + GuitarNotes.b[i] + '>' + GuitarNotes.b[i] + '</li>')
    $('.mask.high-e ul').append('<li note=' + GuitarNotes.e[i] + '>' + GuitarNotes.e[i] + '</li>')
}

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


function showGuitarNotes(notes) {
    var note_letters = []
    for (let [index, value] of notes.entries()) {
        note_letters.push(note_translate[value]);
    }
    $('.guitar-neck .notes li').not('[note="' + "Z" + '"]').animate({
        opacity: 0
    }, 0);
    for (var i = 0; i < note_letters.length; i++) {
        $('.guitar-neck .notes li[note="' + note_letters[i] + '"]').animate({
            opacity: 1
        }, 0);
        // console.log(note_letters[i]);
    }
}

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


function isSubsetOf(svg_name, scaleNotes) {
    var fluteNotes = svg_name.replace('.svg', '').split`-`.map(x=>+x)
    for (let i = 0; i < fluteNotes.length; i++) {
        if (scaleNotes.indexOf(fluteNotes[i]) == -1) {
            return false;
        }
    }
    
    return true;
}

function HideFluteSVG(svg_name) {
    document.getElementById("svg_name").src = img.src.replace(toString(svg_name), "blank");
}

function displayFluteDiagrams(scaleNotes) {
    var allImages = document.querySelectorAll('img');
    allImages[0].src = 'trills/2-4.svg';
    allImages[1].src = 'trills/3-5.svg';
    allImages[2].src = 'trills/4-6.svg';
    allImages[3].src = 'trills/5-6.svg';
    allImages[4].src = 'trills/6-8.svg';
    allImages[5].src = 'trills/8-9.svg';
    allImages[6].src = 'trills/8-10.svg';
    allImages[7].src = 'trills/9-10.svg';
    allImages[8].src = 'trills/10-11.svg';
    allImages[9].src = 'trills/10-0.svg';
    allImages[10].src = 'trills/0-1.svg';
    allImages[11].src = 'trills/0-2.svg';
    allImages[12].src = 'trills/1-2.svg';
    allImages[13].src = 'trills/1-3.svg';


    for(var i = 0; i < allImages.length ; i++) {
      var parts = allImages[i].src.split("/");
      var result = parts[parts.length - 1];

      if (isSubsetOf(result, scaleNotes) === false) {
          allImages[i].src = 'trills/blank.svg';
      }
      
    }


}