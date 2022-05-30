
function getProductDesignData()
{
    return [
    {
        "title": "Scale Navigator Dashboard",
        "img": "webapp_demo.png",
        "date": "2021-current",
        "format": "webapp for exploring musical harmony",
        "url": "http://scale-navigator-dashboard.vercel.app/",
        "desc": "watch a <a href=\"https://youtu.be/l9ZYLjaZRpw\">demo</a>"
    },
    {
        "title": "Scale Navigator MIDI VST",
        "img": "plugin_demo.png",
        "date": "2021-current",
        "format": "MIDI effect plugin -- autotune for MIDI",
        "url": "https://www.scalenavigator.com",
        "desc": "watch a <a href=\"https://youtu.be/lf0BpKuH3hc\">demo</a>"
    }
    ];
}

function productdesign_html()
{
    var pfo = getProductDesignData();
    var html = "";
    var even = pfo.length % 2;

    for (item in pfo)
    {
        html += "<tr>\ ";
        if (even)
            html += "<td class=\"image even\" style=\"background: url('" + pfo[item].img + "') center; background-size: 320px; background-repeat: no-repeat;\">\ <p></p>\ </td>\ ";

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
            html += "\ <td class=\"image odd\" style=\"background: url('" + pfo[item].img + "'); background-size: 320px; background-repeat: no-repeat;\">\ <p></p>\ </td>\ ";

        html += "</tr>\ ";
        html += "<tr class=\"spacer\"><td/><td/><td/></tr>\n";

        even = !even;
    }

    return html;
}

