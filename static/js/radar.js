var file = "/static/data/house_data.csv";

// variable counters
var OneBed = 0;
var TwoBed = 0;
var ThreeBed = 0;
var FourBed = 0;
var FiveBed = 0;


// function to read in data
d3.csv(file,function (data) {
    console.log(data);
    for (var i=0; i<data.length;i++) {
        
        if (data[i]["# of bedrooms"] === "1") {OneBed++}
        if (data[i]["# of bedrooms"] === "2") {TwoBed++}
        if (data[i]["# of bedrooms"] === "3") {ThreeBed++}
        if (data[i]["# of bedrooms"] === "4") {FourBed++}
        if (data[i]["# of bedrooms"] === "5") {FiveBed++}
    }

    console.log(OneBed)

const CHART = document.getElementById("myChart");
Chart.defaults.scale.ticks.beginAtZero = true;

var myRadarChart = new Chart(CHART, {
    type: 'radar',
    data: {
        labels: ["One Bedroom", "Two Bedrooms", "Three Bedrooms", "Four Bedrooms", "Five Bedrooms"],
        datasets: [
            {
                label: 'Room Count of Homes Sold',
                bacgroundColor: '#00ff00',
                borderColor: '#00ff00',
                borderWidth: 2,
                data: [OneBed, TwoBed, ThreeBed, FourBed, FiveBed]
            }
        ]
    

    }

});

})
