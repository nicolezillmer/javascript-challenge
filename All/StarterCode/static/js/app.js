// from data.js

//var sightings = data;

var tbody = d3.select("tbody");

data.forEach((ufoSight) =>{

    var row = tbody.append("tr");

    Object.entries(ufoSight).forEach(([key, value]) => {

        var cell = row.append("td");
        cell.text(value);
    });
});

var form = d3.select("#form");

var button = d3.select("#filter-btn");

button.on("click", runEnter);

form.on("submit", runEnter);



function runEnter(){
    var tbody = d3.select("tbody");
    tbody.html("");
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = data.filter(sighting => sighting.datetime == inputValue);

    console.log(filteredData)
    var sightings = filteredData;

    var tbody = d3.select("tbody");

    filteredData.forEach((ufoSight) =>{

    var row = tbody.append("tr");

    Object.entries(ufoSight).forEach(([key, value]) => {

        var cell = row.append("td");
        cell.text(value);
    });
});


};