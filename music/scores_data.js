
function getScoresData()
{
    return [
    {
        "title": "SOULS",
        "img": "souls.svg",
        "date": "2022",
        "format": "Sia / David OReilly NFT project",
        "url": "https://soulsgalaxy.io/",
        "desc": "unique ambient music for each <a href=\"https://twitter.com/souls_galaxy/status/1537551174051586048\">interactive SOUL</a>"
    },
    {
        "title": "Wave Space",
        "img": "wavespace.jpg",
        "date": "2022",
        "format": "score for immersive cymatic sculptural experience",
        "url": "https://vimeo.com/684033400",
        "desc": "read an <a href=\"https://autre.love/journal/2022/4/15/mega-hertz-and-feelz-lachlan-turczan-makes-water-move-with-sound-and-light\">article</a>"
    },
    {
        "title": "Solve Podcast",
        "img": "solve.jpg",
        "date": "2020",
        "format": "synthwave podcast score",
        "url": "https://youtu.be/wgaNT3A_pQA",
        "desc": "listen to all of season 2 on <a href=\"https://www.iheart.com/podcast/1119-solve-53761293/\">iHeartRadio</a>"
    },
    {
        "title": "How Do You Make Music from Scales?",
        "img": "scales.jpg",
        "date": "2022",
        "format": "lush orchestral score",
        "url": "https://youtu.be/l9ZYLjaZRpw",
        "desc": "generating orchestral music with Scale Navigator Dashboard on mobile"
    },
    {
        "title": "Samplerate Counterpoint",
        "img": "samplerate.jpg",
        "date": "2022",
        "format": "album",
        "url": "https://soundcloud.com/equuipment/sets/samplerate-counterpoint",
        "desc": "album of original orchestral music"
    },
    {
        "title": "To A Wild Rose Growing Throughout the Multiverse",
        "img": "wildrose.jpg",
        "date": "2020",
        "format": "album",
        "url": "https://nathanturczan.bandcamp.com/album/to-a-wild-rose-growing-throughout-the-multiverse",
        "desc": "a procedurally generated album: 14 algorithmic remixes of Edward MacDowell's <em>To a Wild Rose</em>"
    },
    {
        "title": "Adoration of the Flowers",
        "img": "adoration.png",
        "date": "2021",
        "format": "nature documentary score",
        "url": "https://youtu.be/-DQgZVV-Dc0",
        "desc": ""
    },
    {
        "title": "An Opera for Ants",
        "img": "ants.jpg",
        "date": "2021",
        "format": "nature documentary score",
        "url": "https://www.youtube.com/shorts/rDLO6UR-mAs",
        "desc": ""

    },
    {
        "title": "Cactus Zoetrope",
        "img": "cactus.jpg",
        "date": "2021",
        "format": "NFT collaboration",
        "url": "https://vimeo.com/467499866",
        "desc": "check it out on <a href=\"https://superrare.com/artwork-v2/cactus-zoetrope-20901\">SuperRare</a>"
    },

    {
        "title": "Grains",
        "img": "grains.jpeg",
        "date": "2022",
        "format": "emergent video score",
        "url": "https://www.youtube.com/shorts/fwgBl1xELl8",
        "desc": ""
    },
    {
        "title": "Airboat",
        "img": "airboat.jpg",
        "date": "2020",
        "format": "spectral orchestration",
        "url": "https://youtu.be/7IPjz7uxDMY",
        "desc": "spectrally orchestrating the droning motor of an airboat traversing a Florida swamp"
    },
    {
        "title": "Unsettling Approach to Skincare",
        "img": "skincare.jpg",
        "date": "2020",
        "format": "horror film score",
        "url": "https://www.youtube.com/shorts/MWf042Jwyes",
        "desc": ""
    }
    ];
}

function scores_html()
{
    var pfo = getScoresData();
    var html = "";
    var even = pfo.length % 2;

    for (item in pfo)
    {
        html += "<tr>\ ";
        if (even)
            html += "<td class=\"image even\" style=\"background: url('" + pfo[item].img + "') center; background-size: cover;\">\ <p></p>\ </td>\ ";

        var even_class = "even";
        if (!even) even_class = "odd";

        html += "<td class=\"desc " + even_class + "\" colspan=\"2\">\<h3>" + pfo[item].title + "</h3>\ ";
        if (pfo[item].format)
            html += "<p class=\"date\"><em>" + pfo[item].format + "</em></p>\ ";
        html += "<p class=\"date\">" + pfo[item].date + "</p>\ ";
        if (pfo[item].role)
            html += "<p class=\"date\">" + pfo[item].role + "</p>\ ";
        html += "<p class=\"date\"><a href=\"" + pfo[item].url + "\">" + pfo[item].url + "</a></p>\ <p class=\"desc\">\ " + pfo[item].desc + "\ </p>\ </td>\ \ "

        if (!even)
            html += "\ <td class=\"image odd\" style=\"background: url('" + pfo[item].img + "'); background-size: cover; \">\ <p></p>\ </td>\ ";

        html += "</tr>\ ";
        html += "<tr class=\"spacer\"><td/><td/><td/></tr>\n";

        even = !even;
    }

    return html;
}

