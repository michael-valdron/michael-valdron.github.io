function cal_gdp(c, i, g, x, m) {
    "use strict";
    var gdp; 
    
    gdp = c + i + g + (x - m);
    
    return gdp;
}

function cal_click() {
    "use strict";
    var gdp,
        c = parseFloat(document.getElementById("cinput").value), 
        i = parseFloat(document.getElementById("iinput").value),
        g = parseFloat(document.getElementById("ginput").value),
        x = parseFloat(document.getElementById("xinput").value),
        m = parseFloat(document.getElementById("minput").value);
    
    gdp = cal_gdp(c, i, g, x, m);
    
    document.getElementById("answer").setAttribute("value", "$ " + gdp.toFixed(2));
    
    return;
}