/*
    Author: Michael Valdron
    Date: 04-23-2016
*/

/* Global Variables */

var QUANTITY_INDEX = 0;
var PRICE_INDEX = 1;

/* Processing functions. */

function cal_gdp(c, i, g, x, m) {
    "use strict";
    var gdp; 
    
    gdp = c + i + g + (x - m);
    
    return gdp;
}

function cal_rgdp_ngdp(c, i, g, x, m) {
    "use strict";
    var gdp;
    
    gdp = (c[QUANTITY_INDEX] * c[PRICE_INDEX]) + (i[QUANTITY_INDEX] * i[PRICE_INDEX]) + (g[QUANTITY_INDEX] * g[PRICE_INDEX]) + ((x[QUANTITY_INDEX] * x[PRICE_INDEX]) - (m[QUANTITY_INDEX] * m[PRICE_INDEX])); 
    
    return gdp;
}

/* Click event functions. */

function cal_gdp_click() {
    "use strict";
    var gdp,
        c = parseFloat(document.getElementById("cinput").value), 
        i = parseFloat(document.getElementById("iinput").value),
        g = parseFloat(document.getElementById("ginput").value),
        x = parseFloat(document.getElementById("xinput").value),
        m = parseFloat(document.getElementById("minput").value);
    
    if (isNaN(c) || isNaN(i) || isNaN(g) || isNaN(x) || isNaN(m)) {
        document.getElementById("error").innerHTML = "<h4 class=\"col-md-4\">ERROR: Not entries are filled or valid.</h4>\n<div class=\"col-md-8\"></div>";
        document.getElementById("error").style.display = "block";
    } else {
        gdp = cal_gdp(c, i, g, x, m);
        document.getElementById("gdp").setAttribute("value", "$ " + gdp.toFixed(2));
        document.getElementById("error").innerHTML = "";
        document.getElementById("error").style.display = "none";
    }
    
    return;
}

function clr_gdp_click() {
    "use strict";
    
    document.getElementById("gdp").setAttribute("value", "");
    document.getElementById("error").innerHTML = "";
    document.getElementById("error").style.display = "none";
    
    return;
}

function cal_rgdp_ngdp_click() {
    "use strict";
    var rgdp,
        ngdp,
        bc = [],
        bi = [],
        bg = [],
        bx = [],
        bm = [],
        cc = [],
        ci = [],
        cg = [],
        cx = [],
        cm = [];
    
        bc[QUANTITY_INDEX] = parseInt(document.getElementById("bcqinput").value); 
        bi[QUANTITY_INDEX] = parseInt(document.getElementById("biqinput").value);
        bg[QUANTITY_INDEX] = parseInt(document.getElementById("bgqinput").value);
        bx[QUANTITY_INDEX] = parseInt(document.getElementById("bxqinput").value);
        bm[QUANTITY_INDEX] = parseInt(document.getElementById("bmqinput").value);
    
        bc[PRICE_INDEX] = parseFloat(document.getElementById("bcpinput").value); 
        bi[PRICE_INDEX] = parseFloat(document.getElementById("bipinput").value);
        bg[PRICE_INDEX] = parseFloat(document.getElementById("bgpinput").value);
        bx[PRICE_INDEX] = parseFloat(document.getElementById("bxpinput").value);
        bm[PRICE_INDEX] = parseFloat(document.getElementById("bmpinput").value);
    
        cc[QUANTITY_INDEX] = parseInt(document.getElementById("ccqinput").value); 
        ci[QUANTITY_INDEX] = parseInt(document.getElementById("ciqinput").value);
        cg[QUANTITY_INDEX] = parseInt(document.getElementById("cgqinput").value);
        cx[QUANTITY_INDEX] = parseInt(document.getElementById("cxqinput").value);
        cm[QUANTITY_INDEX] = parseInt(document.getElementById("cmqinput").value);
    
        cc[PRICE_INDEX] = parseFloat(document.getElementById("ccpinput").value); 
        ci[PRICE_INDEX] = parseFloat(document.getElementById("cipinput").value);
        cg[PRICE_INDEX] = parseFloat(document.getElementById("cgpinput").value);
        cx[PRICE_INDEX] = parseFloat(document.getElementById("cxpinput").value);
        cm[PRICE_INDEX] = parseFloat(document.getElementById("cmpinput").value);
    
        if ((isNaN(bc[QUANTITY_INDEX]) || isNaN(bi[QUANTITY_INDEX]) || isNaN(bg[QUANTITY_INDEX]) || isNaN(bx[QUANTITY_INDEX]) || isNaN(bm[QUANTITY_INDEX]) || isNaN(bc[PRICE_INDEX]) || isNaN(bi[PRICE_INDEX]) || isNaN(bg[PRICE_INDEX]) || isNaN(bx[PRICE_INDEX]) || isNaN(bm[PRICE_INDEX])) && 
                   (isNaN(cc[QUANTITY_INDEX]) || isNaN(ci[QUANTITY_INDEX]) || isNaN(cg[QUANTITY_INDEX]) || isNaN(cx[QUANTITY_INDEX]) || isNaN(cm[QUANTITY_INDEX]) || isNaN(cc[PRICE_INDEX]) || isNaN(ci[PRICE_INDEX]) || isNaN(cg[PRICE_INDEX]) || isNaN(cx[PRICE_INDEX]) || isNaN(cm[PRICE_INDEX]))) {
            document.getElementById("error").innerHTML = "<h4 class=\"col-md-4\">ERROR: In base year and current year, not entries are filled or valid.</h4>\n<div class=\"col-md-8\"></div>";
            document.getElementById("error").style.display = "block";
        } else if (isNaN(bc[QUANTITY_INDEX]) || isNaN(bi[QUANTITY_INDEX]) || isNaN(bg[QUANTITY_INDEX]) || isNaN(bx[QUANTITY_INDEX]) || isNaN(bm[QUANTITY_INDEX]) || isNaN(bc[PRICE_INDEX]) || isNaN(bi[PRICE_INDEX]) || isNaN(bg[PRICE_INDEX]) || isNaN(bx[PRICE_INDEX]) || isNaN(bm[PRICE_INDEX])) {
            document.getElementById("error").innerHTML = "<h4 class=\"col-md-4\">ERROR: In base year, not entries are filled or valid.</h4>\n<div class=\"col-md-8\"></div>";
            document.getElementById("error").style.display = "block";
        } else if (isNaN(cc[QUANTITY_INDEX]) || isNaN(ci[QUANTITY_INDEX]) || isNaN(cg[QUANTITY_INDEX]) || isNaN(cx[QUANTITY_INDEX]) || isNaN(cm[QUANTITY_INDEX]) || isNaN(cc[PRICE_INDEX]) || isNaN(ci[PRICE_INDEX]) || isNaN(cg[PRICE_INDEX]) || isNaN(cx[PRICE_INDEX]) || isNaN(cm[PRICE_INDEX])) {
            document.getElementById("error").innerHTML = "<h4 class=\"col-md-4\">ERROR: In current year, not entries are filled or valid.</h4>\n<div class=\"col-md-8\"></div>";
            document.getElementById("error").style.display = "block";
        } else {
            rgdp = cal_rgdp_ngdp([cc[QUANTITY_INDEX], bc[PRICE_INDEX]], [ci[QUANTITY_INDEX], bi[PRICE_INDEX]], [cg[QUANTITY_INDEX], bg[PRICE_INDEX]], [cx[QUANTITY_INDEX], bx[PRICE_INDEX]], [cm[QUANTITY_INDEX], bm[PRICE_INDEX]]);
            ngdp = cal_rgdp_ngdp([cc[QUANTITY_INDEX], cc[PRICE_INDEX]], [ci[QUANTITY_INDEX], ci[PRICE_INDEX]], [cg[QUANTITY_INDEX], cg[PRICE_INDEX]], [cx[QUANTITY_INDEX], cx[PRICE_INDEX]], [cm[QUANTITY_INDEX], cm[PRICE_INDEX]]);
            document.getElementById("ngdp").setAttribute("value", "$ " + ngdp.toFixed(2));
            document.getElementById("rgdp").setAttribute("value", "$ " + rgdp.toFixed(2));
            document.getElementById("error").innerHTML = "";
            document.getElementById("error").style.display = "none";
        }
        
    
    return;
}

function clr_rgdp_ngdp_click() {
    "use strict";
    
    document.getElementById("ngdp").setAttribute("value", "");
    document.getElementById("rgdp").setAttribute("value", "");
    document.getElementById("error").innerHTML = "";
    document.getElementById("error").style.display = "none";
    
    return;
}