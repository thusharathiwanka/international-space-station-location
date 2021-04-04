const API_URL = "https://api.wheretheiss.at/v1/satellites/25544";
// creating a map
const MAP = L.map("map").setView([0, 0], 1.5);
// adding marker to the map
const marker = L.marker([0, 0]).addTo(MAP);
// adding copyrights
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// adding tile image to the map
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(MAP);

// selecting dom elements
const lat = document.querySelector("#lat");
const long = document.querySelector("#long");

// fetching data from api
const getSatellite = async () => {
  const response = await fetch(API_URL);
  const satellite = await response.json();
  const { latitude, longitude } = satellite;

  // setting latitude and longitude
  setLocation(latitude, longitude);
};

// set location in text and map
const setLocation = (latitude, longitude) => {
  // setting latitude and longitude as text
  lat.textContent = latitude;
  long.textContent = longitude;

  // updating marker
  marker.setLatLng([latitude, longitude]);
};

// getting updated values per second
setInterval(() => {
  getSatellite();
}, 1000);
