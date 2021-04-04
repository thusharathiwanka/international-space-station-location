const API_URL = "https://api.wheretheiss.at/v1/satellites/25544";
const MAP = L.map("map").setView([0, 0], 1.5);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(MAP);

const lat = document.querySelector("#lat");
const long = document.querySelector("#long");

const getSatellite = async () => {
  const response = await fetch(API_URL);
  const satellite = await response.json();
  const { latitude, longitude } = satellite;

  setLocation(latitude, longitude);
};

const setLocation = (latitude, longitude) => {
  lat.textContent = latitude;
  long.textContent = longitude;
};

setInterval(() => getSatellite(), 1000);
