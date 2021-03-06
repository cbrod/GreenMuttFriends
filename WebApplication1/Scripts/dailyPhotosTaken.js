﻿function drawDailyPhotosTakenGraph(data, viz, start, end) {
    //Cast strings to dates
    data.forEach(function (arrayItem) {
        var d = moment(arrayItem.date, "MM/DD/YYYY").format('L');
        arrayItem.date = d;
    });

    //Calculate totals
    totals = calulateTotalsbyDate(data);


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
            "value": totals,
            "stroke": { "width": 3 }
        })
        .type("bar")
        .id("date")         // key for which our data is unique on
        //.text("date")       // key to use for display tex
        .x({
            "value": "date",
            "grid": { "color": "#ffffff" },
        })
        .y({
            "value": "totalPhotos"
        })
        .color(function (d) {
            return d.count > 0 ? "#5FBD73" : "#1C2C8C";
        })
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
        .tooltip(["value"])
        .time({
            "value": "date",
            "format": d3.time.format("%x")
        })
        .ui({
            "position": "top",
            "align": "left",
            "font": {
                "size": 19
            }
        })
        .height(400)
        .draw()
}

//Calculate totals from current data
function calulateTotalsbyDate(data) {
    var totals = [];
    i = 1;
    //Calculate total for time selected
    data.forEach(function (arrayItem) {

        //If it exists add to total
        containsDateV = containsDate(arrayItem, totals);
        if (containsDateV != -1) {
            totals[containsDateV].totalPhotos += arrayItem.validphotos + arrayItem.invalidphotos;
            totals[containsDateV].validphotos += arrayItem.validphotos;
            totals[containsDateV].invalidphotos += arrayItem.invalidphotos;
            totals[containsDateV].count++;
        } else {
            totals.push({
                id: i,
                date: arrayItem.date,
                totalPhotos: arrayItem.validphotos + arrayItem.invalidphotos,
                validphotos: arrayItem.validphotos,
                invalidphotos: arrayItem.invalidphotos,
                count: 1
            });
        }
    });
    return totals;
}


//Check if date is in data set
function containsDate(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].date === obj.date) {
            return i;
        }
    }
    return -1;
}
