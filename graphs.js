// Created by Arnav Mundkur
// Data from http://data.gov.au/
// Code modified from Jeremy Rue: https://jrue.github.io/coding/2014/exercises/basicbubblepackchart/ 



var selectedState;                  //this is the global variabel that is updated with the user's choice

d3.json("data2.json", function (data){                  //Setting the dimensions of the visualization
  var width = 525,                              
    max_area = 10,
    // color = d3.scale.linear().domain([0, 1295]).range(['#9e0606', '#1e1d1d']),
    color = d3.scale.category20b();
    height = 500;


  var canvas = d3.select("#chart-svg1").append("svg")       //appending the svg element to the space for the visualization on the HTML
    .attr("width", width)
    .attr("height", height)
    .append("g")
        .attr("transform", "translate(95, 30)");            //centering the SVG element

  var pack = d3.layout.pack()
    .size([width, height-50])
    .padding(30);

  var nodes = pack.nodes(data);                             //creating node elements to append circles to for each data point
  var node = canvas.selectAll(".node")
    .data(nodes)
            .enter()
            .append("g")
                .attr("class", "node")
                .attr("transform", function(d){ return "translate("+ d.x + "," + d.y + ")";});

        node.append("circle")                                           //Where the main visualization happens
            .attr("r", function(d){return d.r;})
            .style("fill", function(d) {return  color(d.value)})        //color value related to amount of crashes returned here
            .attr("opacity", 0.8)
            .attr("stroke", function(d) {return d.nodes ? "#fff" : "black"})
            .attr("stroke-width", "1")
            .on('mouseover', function(d){                               //function to highlight the circles when mouse hovers over
                d3.select(this).style("opacity", 0.8)
            var nodeSelection = d3.select(this).style({"fill": "#bdcfed"}
                );
            nodeSelection.select("text").style({"fill": "black"});
            })
            .on('mouseout', function(d){                                    //function to reset the color and opacity when the mouse leaves a bubble
                d3.select(this).style("opacity", 0.8)
            var nodeSelection = d3.select(this).style("fill", function(d) { return color(d.value); })
            })

        .on('click', function(choice){                                      //assigning the global variable selectedState to the state clicked on 
            
            choice = choice["name"]; 
            selectedState = choice;
            console.log(selectedState);
            buildPlot(selectedState);
               
        })

        
        node.append("text")                                         //code for attaching the names of the states to the bubbles
            .text(function(d){ return  d.name; })
            .attr("text-anchor", "middle")
            .style({
            "text-anchor": "middle",
            "fill":"black", 
            "font-weight": "bold",
            "font-family":"verdana",
            "font-size": "8px"
        });
    });




/////////////////////////////////////////////////////////
// Created by David Harris
// Data from http://data.gov.au/
// Code modified from Jeremy Rue: https://bl.ocks.org/mbostock/3887118


//Margins for the scatter plpot
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

//Append the svg to html
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 

    ///////////////////////////////////////////////////////////////////

//Build the scatter plot based on the user selection.    
buildPlot(selectedState);
d3.select("select").on("input", function () {
    buildPlot(this.value);
})

var dataArray = []; //Holds the data that is pulled from the CSV file

//Function for building the graph, and pulling from the CSV file
function buildPlot(selectedState) {
    d3.csv("Fatalities2016.csv", function (error, data) {


        if (error) throw error;

        //alert(JSON.stringify(data));
        dataArray = [];


        //Based on the user selected state it will pull the corresponding data from the file
        //Add the data to an Array
        switch (selectedState) {

            case 'ACT':

                data.forEach(function (d) {
                    if (d.State == 'ACT') {
                        dataArray.push({ Age: +d.Age, crashes_per_age: +d.crashes_per_age });
                        console.log(d.State)
                    }
                });

                break;

            case 'NSW':

                data.forEach(function (d) {
                    if (d.State == 'NSW') {
                        dataArray.push({ Age: +d.Age, crashes_per_age: +d.crashes_per_age });
                        console.log(d.State)
                    }
                });

                break;

            case 'NT':

                data.forEach(function (d) {
                    if (d.State == 'NT') {
                        dataArray.push({ Age: +d.Age, crashes_per_age: +d.crashes_per_age });
                        console.log(d.State)
                    }
                });

                break;

            case 'QLD':

                data.forEach(function (d) {
                    if (d.State == 'QLD') {
                        dataArray.push({ Age: +d.Age, crashes_per_age: +d.crashes_per_age });
                        console.log(d.State)
                    }
                });

                break;

            case 'SA':

                data.forEach(function (d) {
                    if (d.State == 'SA') {
                        dataArray.push({ Age: +d.Age, crashes_per_age: +d.crashes_per_age });
                        console.log(d.State)
                    }
                });

                break;

            case 'TAS':

                data.forEach(function (d) {
                    if (d.State == 'TAS') {
                        dataArray.push({ Age: +d.Age, crashes_per_age: +d.crashes_per_age });
                        console.log(d.State)
                    }
                });

                break;

            case 'VIC':

                data.forEach(function (d) {
                    if (d.State == 'VIC') {
                        dataArray.push({ Age: +d.Age, crashes_per_age: +d.crashes_per_age });
                        console.log(d.State)
                    }
                });

                break;

            case 'WA':

                data.forEach(function (d) {
                    if (d.State == 'WA') {
                        dataArray.push({ Age: +d.Age, crashes_per_age: +d.crashes_per_age });
                        console.log(d.State)
                    }
                });

                break;

            default:
              

                data.forEach(function (d) {
                    dataArray.push({ Age: +d.Age, crashes_per_age: +d.crashes_per_age });
                    console.log(d.State)
                })

                break;
        };

        //alert(dataArray.length);
        ///////////////////////////////////////////////////////////////////

        //With the selected data in the Array, make the domain based on the values
        x.domain(d3.extent(dataArray, function (d) { return d.Age; })).nice();
        y.domain(d3.extent(dataArray, function (d) { return d.crashes_per_age; })).nice();

        //For clearing the old axis when a user selects another state
        svg.select("g.y.axis").remove()
        svg.select("g.x.axis").remove()

        

        //Add y Axis to the newly formed graph
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)    
          .append("text")
            .attr("class", "label")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Number of crashes")

            //Add x Axis to the newly formed graph
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + 450 + ")")
            .call(xAxis)
          .append("text")
            .attr("class", "label")
            .attr("x", width)
            .attr("y", +35)
            .style("text-anchor", "end")
            .text("Age (years)");

        //Get the values from the array, for the dots on the graph
        var dots = svg.selectAll(".dot").data(dataArray);

        // Build new dots based on the values in the Array
          dots.enter().append("circle")
            .attr("class", "dot")
            .attr("r", 3.5)
            .attr("cx", function (d) { return x(d.Age); })
            .attr("cy", function (d) { return y(d.crashes_per_age); })
            .style("fill", function (d) { return color(d.Age); });

        //Clear the dots from the graph when a user selects anothe state
          dots.exit()
              .remove()

        // update the grpah with the new values
          dots.attr("cx", function (d) { return x(d.Age); })
              .attr("cy", function (d) { return y(d.crashes_per_age); })
              .style("fill", function (d) { return color(d.Age); });
    });
}


////////////////////////////////////////////////////////////////////////////////
// Created by Matthias Cordes
// Data from http://data.gov.au/
// Code modified from DeBraid: https://github.com/DeBraid/www.cacheflow.ca

// Definde size of D3 and axis
d3.csv("TypeOfRoadUser.csv", function (data){

      var n = 5, // number of layers
      m = 6; // number of samples per layer

// Define margin of the graphs 
  var margin = {top: 20, right: 50, bottom: 100, left: 75},
      width = 740 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

// Creating SVG element for html
  var svg = d3.select("#chart-svg3").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    // variables displayed next to the graph
    var headers = ["Driver","Motorcyle","Passenger","Pedestrian","Bicyclist"];
    
    var layers = d3.layout.stack()(headers.map(function(priceRange) {
        return data.map(function(d) {
          return {x: d.Category, y: +d[priceRange]};
        });
    }));
    
    // Grouping values for the grouped view
    var yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); });
    var yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });

    // Defining colors ansd axis 


    var xScale = d3.scale.ordinal()
        .domain(layers[0].map(function(d) { return d.x; }))
        .rangeRoundBands([25, width], .08);

    var y = d3.scale.linear()
        .domain([0, yStackMax])
        .range([height, 0]);

    var color = d3.scale.ordinal()
        .domain(headers)
        .range(["#98ABC5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);

      
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .tickSize(0)
        .tickPadding(6)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(d3.format(".2s"));

    var layer = svg.selectAll(".layer")
        .data(layers)
        .enter().append("g")
        .attr("class", "layer")
        .style("fill", function(d, i) { return color(i); });


    // Draw the rectangels 
    var rect = layer.selectAll("rect")
        .data(function(d) { return d; })
        .enter().append("rect")
        .attr("x", function(d) { return xScale(d.x); })
        .attr("y", height)
        .attr("width", xScale.rangeBand())
        .attr("height", 0);

// Make beautiful transitions on rectangels
    rect.transition()
        .delay(function(d, i) { return i * 10; })
        .attr("y", function(d) { return y(d.y0 + d.y); })
        .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); });

//********** AXES ************
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text").style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function(d) {
                  return "rotate(-45)" 
                });
    
    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(20,0)")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr({"x": -150, "y": -70})
        .attr("dy", ".75em")
        .style("text-anchor", "end")
        .text("Total amount accidents");

    var legend = svg.selectAll(".legend")
        .data(headers.slice().reverse())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) { return "translate(-20," + i * 20 + ")"; });
       
        legend.append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);
    
        legend.append("text")
              .attr("x", width - 24)
              .attr("y", 9)
              .attr("dy", ".35em")
              .style("text-anchor", "end")
              .text(function(d) { return d;  });

    d3.selectAll("input").on("change", change);

    var timeout = setTimeout(function() {
      d3.select("input[value=\"grouped\"]").property("checked", true).each(change);
    }, 2000);

    function change() {
      clearTimeout(timeout);
      if (this.value === "grouped") transitionGrouped();
      else transitionStacked();
    }

    // Make functions for the transitions 
    function transitionGrouped() {
      y.domain([0, yGroupMax]);

      rect.transition()
          .duration(500)
          .delay(function(d, i) { return i * 10; })
          .attr("x", function(d, i, j) { return xScale(d.x) + xScale.rangeBand() / n * j; })
          .attr("width", xScale.rangeBand() / n)
        .transition()
          .attr("y", function(d) { return y(d.y); })
          .attr("height", function(d) { return height - y(d.y); });

      rect.on("mouseover", function() { tooltip.style("display", null); })
        .on("mouseout", function() { tooltip.style("display", "none"); })
        .on("mousemove", function(d) {
          var xPosition = d3.mouse(this)[0] - 15;
          var yPosition = d3.mouse(this)[1] - 25;
          tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
          tooltip.select("text").text("hello world");
        });
    };

    function transitionStacked() {
      y.domain([0, yStackMax]);

      rect.transition()
          .duration(500)
          .delay(function(d, i) { return i * 10; })
          .attr("y", function(d) { return y(d.y0 + d.y); })
          .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
        .transition()
          .attr("x", function(d) { return xScale(d.x); })
          .attr("width", xScale.rangeBand());

      rect.on("mouseover", function() { tooltip.style("display", null); })
        .on("mouseout", function() { tooltip.style("display", "none"); })
        .on("mousemove", function(d) {
          var xPosition = d3.mouse(this)[0] - 15;
          var yPosition = d3.mouse(this)[1] - 25;
          // console.log(xPosition);
          tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
          tooltip.select("text").text("hello world");
        });
    };

    var tooltip = svg.append("g")
        .attr("class", "tooltip");
        
    tooltip.append("rect")
        .attr("width", 30)
        .attr("height", 20)
        .attr("fill", "red")
        .style("opacity", 0.5);
     
    tooltip.append("text")
        .attr("x", 15)
        .attr("dy", "1.2em")
        .style("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("font-weight", "bold");
});
