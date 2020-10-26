

// Create map object
var myMap2 = L.map("map2", {
    center: [33.8300, -84.3847],
    zoom: 11

  });
  

// Add tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap2);


// Import Data
d3.csv("data/merged_house_data.csv").then(function(data) {

  // convert strings to int
  data.forEach(function(data) {
    data.lat = +data.lat;
    data.lon = +data.lon;
  });

      // Loop through the quakeFeatures data
      for (var i = 0; i < data.length; i++) {

        var color = "";
        if (data[i].median<= 200000) {
          color = "#41b6c4";
        }
        else if (data[i].median<= 300000) {
          color = "#41b6c4";
        }
        else if (data[i].median<= 400000) {
            color = "#41b6c4";
          }
        else if (data[i].median<= 500000) {
          color = "#1d91c0";
        }
        else if (data[i].median<= 600000) {
            color = "#225ea8";
          }
        else {
          color = "#0c2c84";
        }
        
        var houseLocs = [data[i].lat,data[i].lon]

        // Add circles to map
        // console.log(data[i].TOTALACRES);
        // console.log(droughtLocs);
        L.circle(houseLocs, {
          fillOpacity: 0.75,
          color: "black",
          weight: 0.5,
          fillColor: color,
          // Adjust radius
          radius: data[i].median * 0.003,
        }).bindPopup("<h2>City: <b>" + data[i].City +"<b/><h/2><h4>Zip Code: <b>" + data[i].RegionName +"<b/><h/4><br><p>2 Bedroom: $"+ data[i].median2 + "<p>3 Bedroom: $"+ data[i].median3 + "<p>4 Bedroom: $"+ data[i].median4 + "<p>5 Bedroom: $"+ data[i].median5 + "<h/4>").addTo(myMap2);
      }
    });




// ---------------------------------------------------------------------------------------------

// // The Chart.js doughnut visual - Acres Burned


// var ctx = document.getElementById('doughChart').getContext('2d');
// var doughnutChart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'doughnut',

//     // The data for our dataset
//     data: {
//         labels: ['0-1 acres', '1-5 acres', '5-10 acres', '10-100 acres', '100-1000 acres', '1000-5000 acres', '5000-10000 acres', '10000 +'],
//         datasets: [{
//             label: 'My dataset',
//             backgroundColor: ['rgb(8, 8, 248)', 'rgb(8, 152, 248)','rgb(8, 248, 88)', 'rgb(33, 141, 6)',
//             'rgb(8, 83, 1)', 'rgb(208, 255, 0)','rgb(255, 145, 0)', 'rgb(255, 0, 0)' ],
//             borderColor: 'rgb(255, 255, 255)',
//             data: [63290, 16279, 2450, 5046, 2127, 749, 223, 344]
//         }]
//     },
//     // Configuration options go here
//     options: {}

// });





// // ---------------------------------------------------------------------------------------------

// //  Fire Cause Visualization

// var ctx2 = document.getElementById('doughChart2').getContext('2d');
//   var doughnutChart2 = new Chart(ctx2, {
//     // The type of chart we want to create
//     type: 'doughnut',
//     // The data for our dataset
//     data: {
//         labels: ['0-Unknown', '1-Lightning', '2-Equipment Use', '3-Smoking', '4-Campfire', '5-Debris Burning', '6-Railroad', '7-Arson', '8-Children', '9-Miscellaneous'],
//         datasets: [{
//             label: 'My dataset',
//             backgroundColor: ['#03071E', "#370617", "#6A040F", '#9D0208', "#D00000", "#DC2F02","#E85D04", "#F48C06", "#FAA307", "#FFBA08"],
//             borderColor: 'rgb(255, 255, 255)',
//             data: [18, 1091, 85, 2, 57, 15, 11, 94, 3, 394]
//         }]
//     },
//     // Configuration options go here
//     options: {}
//   });

//   // ---------------------------------------------------------------------------------------------

// //  Total Acres by Year Visualization
// var ctx3 = document.getElementById('doughChart3').getContext('2d');
//   var doughnutChart3 = new Chart(ctx3, {
//     // The type of chart we want to create
//     type: 'doughnut',
//     // The data for our dataset
//     data: {
//         labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
//         datasets: [{
//             label: 'My dataset',
//             backgroundColor: ['#250066', "#390099", "#6C0079", '#850069', "#9E0059", "#FF0054","#FF2A2A", "#FF5400", "#FF8900", "#FFBD00"],
//             borderColor: 'rgb(255, 255, 255)',
//             data: [372059, 2069404, 4349173, 1510563, 952690, 2510226, 1324693, 2882366, 2565586, 770370]
//         }]
//     },
//     // Configuration options go here
//     options: {}
//   });
  