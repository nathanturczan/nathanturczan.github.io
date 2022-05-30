
function getTracksData()
{
    return [
    {
        "title": "Walking Backwards",
        "img": "scale_nav_smaller.gif",
        "date": "2018-present (in development)",
        "format": "a web application for exploring harmony",
        "url": "https://www.nathanturczan.com/apps/",
        "desc": "read an <a href=\"scale_nav_explanation/index.html\">explanation</a>"
    },
    {
        "title": "A Perfect Mess",
        "img": "MI-2.gif",
        "date": "2018 - 2019",
        "format": "for CalArts WaveCave",
        "url": "https://www.nathanturczan.com/installation/",
        "desc": "read an <a href=\"modal_intersections_explanation/index.html\">explanation</a>"
    },
    {
        "title": "Fluorescent Sunset",
        "img": "inter.gif",
        "date": "2018 - 2019",
        "format": "for CalArts Machine Orchestra",
        "url": "https://youtu.be/w1Bs_j3KwBY",
        "desc": "read an <a href=\"INTERSTICES_explanation/index.html\">explanation</a>"
    },
    {
        "title": "Music for Sitting in the Wet Grass",
        "img": "inter.gif",
        "date": "2018 - 2019",
        "format": "for CalArts Machine Orchestra",
        "url": "https://youtu.be/w1Bs_j3KwBY",
        "desc": "read an <a href=\"INTERSTICES_explanation/index.html\">explanation</a>"
    },
    {
        "title": "Lydian Reflections",
        "img": "inter.gif",
        "date": "2018 - 2019",
        "format": "for CalArts Machine Orchestra",
        "url": "https://youtu.be/w1Bs_j3KwBY",
        "desc": "read an <a href=\"INTERSTICES_explanation/index.html\">explanation</a>"
    }
    ];
}

function tracks_html()
{
    var pfo = getTracksData();
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

