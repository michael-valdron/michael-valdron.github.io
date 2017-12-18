/**
 * @author Michael Valdron
 * Creation Date: Dec 17, 2017
 *
 * Data Structure Tree
 * ===================
 * projects
 * |_ project_name
 * |_ catagory
 * |_ project_links
 * | |_ label
 * | |_ url
 * |_ prim_link
 * |_ top_project
 */

var PATH = "json/projects.json";

function loadData() {
    var req = new XMLHttpRequest();
    req.open('GET', PATH);
    return req;
}

function projectsHeader() {
    json_req = loadData();
    json_req.onreadystatechange = function() {
        var data = JSON.parse(json_req.responseText);
        var html = "<li><strong>Top Projects</strong></li>";

        for (var i = 0; i < data.projects.length; i++) {
            if (data.projects[i].top_project) {
                html += "<li><a href=\"" + data.projects[i].project_links[data.projects[i].prim_link].url + "\" target=\"_blank\">" + data.projects[i].project_name + "</a></li>";
            }
        }
        html += "<li class=\"divider\"></li>" +
                "<li>" +
                "<a href=\"projects.html\">Show More Projects</a>" +
                "</li>";
        document.getElementById('projects-h').innerHTML = html;
    }
    json_req.send();
}
