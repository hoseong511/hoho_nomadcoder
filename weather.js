const API_KEY = "e4b047b424c97a05dacbdabaad483b16";
const weather = document.querySelector(".js-weather");
const MYLOCATION = "loc"



function requestAPI(lat, lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  .then(function(response){
    return response.json();
  }).then(function(json){    
    const temp = json.main.temp;
    const place = json.name;
    weather.innerText = `${temp}℃ @ ${place} `
  })
}

function saveMyLocation(text, obj){
  const positionObj = JSON.stringify(obj);
  localStorage.setItem(text, positionObj);
}

function handleSucces(position){
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const timestamp = position.timestamp;
  const positionObj = {
    latitude,
    longitude,
    timestamp
  }
  saveMyLocation(MYLOCATION, positionObj);

}

function handleError(){
  console.log("Can't connect");
}

function loadMyLocation(){
  navigator.geolocation.getCurrentPosition(handleSucces, handleError);
  
  
}

function getMyLocation(){
  const myLocation = localStorage.getItem(MYLOCATION);
  if (myLocation !== null){
    const loc = JSON.parse(myLocation);
    console.log(loc);
    requestAPI(loc.latitude, loc.longitude);

  } else {
    loadMyLocation();
  }
}

function init(){
  getMyLocation();
};

init();