const API_URL = "https://api.wheretheiss.at/v1/satellites/25544";

const getSatellite = async () => {
  const response = await fetch(API_URL);
  const satellite = await response.json();
  console.log(satellite);
};

getSatellite();
