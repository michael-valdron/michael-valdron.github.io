{:title "Projects - Steam Trends"
 :layout :page
 :mimg "../img/steam-trends.png"
 :page-index 3
 :navbar? false}

# steam-trends
Shows the different trends on the Steam platform over the years.

## Links
- [Github](https://github.com/michael-valdron/steam-trends)
- [Live Site](https://michaelvaldron.ca/steam-trends)

## Site Map
- index.html - The homepage and frontend dashboard for all the visualizations produced.  Uses the W3.CSS Template.
- price_early_access.html - An InfoVis that shows all the prices for both early access games and other games, uses a Bar Chart visualization design idiom.
- terms.html - Common Term of Interest Word Cloud.
- css/style.css - CSS file for index.html.
- css/vis.css - CSS file for common visualization styles.
- js/data.js - Contains all the data access and generic data preprocessing functions.
- js/dropdown.js - Contains functions related to the site dropdown. (i.e. the dropdown loader that retrieves the data from 'vis.json')
- js/core.js - Contains all homepage functions.
- js/<visualization_name>/core.js - Contains all webpage and visualization functions.
- json/vis.json - Contains vismap data, mainly used for dynamic visualization links.

## References
- W3.CSS Template