

const CHART = document.getElementById("myChart");
Chart.defaults.scale.ticks.beginAtZero = true;

var myRadarChart = new Chart(CHART, {
    type: 'radar',
    data: {
        labels: ["One Bedroom", "Two Bedrooms", "Three Bedrooms", "Four Bedrooms", "Five Bedrooms"],
        datasets: [
            {
                label: '2010 Avg Price',
                bacgroundColor: 'rgba(00,225,00,0.1)',
                borderColor: '#00ff00',
                borderWidth: 2,
                data: [96728, 82520, 114207, 165190, 229899]
            },{
                label: '2020 Avg Price',
                bacgroundColor: 'rgba(225,22500,0.1)',
                borderColor: '#ffff00',
                borderWidth: 2,
                data: [131974, 114750, 162899, 226149, 308727]
            }
        ]
    

    }

});


