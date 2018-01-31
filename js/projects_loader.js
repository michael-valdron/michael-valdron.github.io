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

function getCatagories(projects) {
    var c = 0;
    var c_data = [];
    for (p of projects) {
        if (!c_data.includes(p.catagory)) {
            c_data[c] = p.catagory;
            c++;
        }
    }
    return c_data;
}

function printRow(project, catagory, p_html) {
    var html = p_html;
    if(project.catagory == catagory) {
        if (project.project_links[0].url == "") {
            if (project.project_links.length < 2) {
                html += "<tr><td>" + project.project_name + "</td><td>" + project.project_links[0].label + "</td></tr>";
            } else {
                html += "<tr><td rowspan=\"" + project.project_links.length + "\">" + project.project_name + "</td><td>" + project.project_links[0].label + "</td></tr>";
            }
        } else {
            if (project.project_links.length < 2) {
                html += "<tr><td>" + project.project_name + "</td><td><a href=\"" + project.project_links[0].url + "\" target=\"_blank\">" + project.project_links[0].label + "</a></td></tr>";
            } else {
                html += "<tr><td rowspan=\"" + project.project_links.length + "\">" + project.project_name + "</td><td><a href=\"" + project.project_links[0].url + "\" target=\"_blank\">" + project.project_links[0].label + "</a></td></tr>";
            }
        }
        for (var i = 1; i < project.project_links.length; i++) {
            if (project.project_links[i].url == "") {
                html += "<tr><td>" + project.project_links[i].label + "</td></tr>";
            } else {
                html += "<tr><td><a href=\"" + project.project_links[i].url + "\" target=\"_blank\">" + project.project_links[i].label + "</a></td></tr>";
            }
        }
    }
    return html;
}

function printTables(projects, catagories) {
    var html = "";
    for (c of catagories) {
        html += "<div class=\"row\">" +
                "<div class=\"box\">" +
                "<div class=\"col-lg-12\">" +
                "<hr>" +
                "<h2 class=\"intro-text text-center\"><strong>" + c + "</strong></h2>" +
                "<hr>" +
                "</div>" +
                "<div class=\"col-lg-12\">" +
                "<table class=\"table table-responsive\">" +
                "<thead><tr><th style=\"width: 50%;\">Project Name</th><th style=\"width: 50%;\">URL</th></tr></thead>" +
                "<tbody>";
        for (p of projects) {
            html = printRow(p, c, html);
        }
        html += "</tbody></table></div></div></div>";
    }
    return html;
}

function projectsHeader(projects) {
    var html = "<li><strong>Top Projects</strong></li>";

    for (p of projects) {
        if (p.top_project) {
            html += "<li><a href=\"" + p.project_links[p.prim_link].url + "\" target=\"_blank\">" + p.project_name + "</a></li>";
        }
    }
    html += "<li class=\"divider\"></li>" +
            "<li>" +
            "<a href=\"projects.html\">Show More Projects</a>" +
            "</li>";
    document.getElementById('projects-h').innerHTML = html;
}

function loadProjectsContent(projects) {
    var catagories = getCatagories(projects);
    var html = printTables(projects, catagories);
    document.getElementById('project-groups').innerHTML = html;
}

function loadData(loadProjectsTable = false) {
    var json_req = new XMLHttpRequest();
    json_req.open('GET', PATH);
    json_req.onreadystatechange = function() {
        var data = JSON.parse(json_req.responseText);
        projectsHeader(data.projects);
        if (loadProjectsTable) {
            loadProjectsContent(data.projects);
        }
    };
    json_req.send();
}
