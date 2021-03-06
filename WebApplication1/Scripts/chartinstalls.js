﻿
/**
 * Draws the install and user graph  
 * @param {any} data data from the User Model
 * @param {any} viz the id of the div container
 */
function drawInstallGraph(data, viz) {

    //Create color attributes for chart
    var attributes = [
        { "clinic": "Ijora Clinic", "hex": "#5FBD73", "image": "/Content/img/IjoraI.png" },
        { "clinic": "Katsina Clinic", "hex": "#6A5599", "image": "/Content/img/KatsinaI.png" },
        { "clinic": "Mashegu Clinic", "hex": "#71BDD3", "image": "/Content/img/MasheguI.png" },
        { "clinic": "Rawayau Clinic", "hex": "#1C2C8C", "image": "/Content/img/RawayauI.png" }
    ]

    var vizInstall = d3plus.viz()
        .container(viz)
        .data({
            "value": data,
            "stroke": { "width": 3 }

        })
        .type("line")
        .id("clinic")         // key for which our data is unique on
        .text("clinic")       // key to use for display text
        .x({
            "value": "date",
            "grid": { "color": "#ffffff" },
            "zerofill": true
        })
        .y("value")
        .attrs(attributes)
        .color("hex")
        .font({
            "family": "'Century Gothic', Helvetica, Arial, sans-serif",
            "size": 15
        })
        .axes({
            "background": {
                "color": "#ffffff",
                "stroke": { "width": 0 }
            }
        })
        .format({
            "text": function (text, params) {
                if (text === "installs") {
                    return "Total Installs";
                } else if (text === "value") {
                    return "Total App Users";
                } else if (text === "Y Axis") {
                    return "Filter by ";
                } else {
                    return d3plus.string.title(text, params);
                }
            }
        })
        .tooltip(["clinic", "value", "installs"])
        .ui([
            {
                "method": "y",
                "value": ["value", "installs"] //toggles the y axis
            }
        ])
        .ui({
            "position": "top",
            "align": "left",
            "font": {
                "size": 19
            }
        })
        .legend({
            "size": 30,
            "filters": true,
            "labels": true
        })
        .time({
            "value": "date",
            "format": d3.time.format("%x")
        })
        .icon({
            "style": "knockout",
            "value": "image"
        })
        .height(500)
        .draw()
}
