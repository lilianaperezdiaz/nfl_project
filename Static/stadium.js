//Create the initial map object 
let stadiumMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
});

//Add tile layer 
L.tileLayer('https://{s}.tile.openstreetmap.org{foo}/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(stadiumMap);

//Fetch stadium data 
fetch('Resources/data.json')
  .then(response => response.text())
  .then(text => processCSV(text));