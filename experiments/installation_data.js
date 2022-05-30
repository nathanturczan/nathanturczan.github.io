
function getInstallationData()
{
    return [
    {
        "title": "Pandiatonic Autoharp",
        "img": "autoharp.jpg",
        "date": "2021",
        "format": "modified Autoharp",
        "url": "https://youtu.be/4yLPWX7EpR0",
        "desc": ""
    }
    ];
}

function installation_html()
{
    var pfo = getInstallationData();
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

