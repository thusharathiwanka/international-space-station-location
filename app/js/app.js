const API_URL = "https://api.wheretheiss.at/v1/satellites/25544";

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

getSatellite();
