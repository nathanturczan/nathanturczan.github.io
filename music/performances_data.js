
function getPerformancesData()
{
    return [
    {
        "title": "Lap Me in Soft Lydian Airs",
        "img": "lydianairs.jpg",
        "date": "2022",
        "format": "improvisation with Scale Navigator and Lydia",
        "url": "https://youtu.be/kcDAPk0lP2A",
        "desc": ""
    },
    {
        "title": "Piano Improvisation",
        "img": "pianoimp.png",
        "date": "2022",
        "format": "improvisation with Piano and Scale Navigator",
        "url": "https://youtu.be/yaKTnGT708Y",
        "desc": ""
    },
    {
        "title": "Eyes/Eggs of Unstable Crystal",
        "img": "eyeseggs.jpg",
        "date": "2018 - 2019",
        "format": "Improvised Scale Navigator Performance",
        "url": "https://youtu.be/_vK7BJLiBDE",
        "desc": ""
    },
    {
        "title": "Bluegrass Abstraction",
        "img": "nathanturczan_headshot.png",
        "date": "2021",
        "format": "for Pandiatonic Autoharp and Tenor Mandola",
        "url": "https://youtu.be/w1Bs_j3KwBY",
        "desc": "read an <a href=\"INTERSTICES_explanation/index.html\">explanation</a>"
    },
    {
        "title": "Music for Sitting in the Wet Grass",
        "img": "wetgrass.jpg",
        "date": "2019",
        "format": "for Player Piano and Lydia",
        "url": "https://youtu.be/XJohtj7R0Nk",
        "desc": ""
    },
    {
        "title": "Lydian Reflections",
        "img": "reflections.png",
        "date": "2018",
        "format": "for Electronics and Lydia",
        "url": "https://youtu.be/piCruZ5oHZ0",
        "desc": ""
    }
    ];
}

function performances_html()
{
    var pfo = getPerformancesData();
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
