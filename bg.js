const UNSPLASH_APIKEY="PDToVYZCm6MnMatLfE0hlnuz2mMAD2wsz5Arx9Z5mIk",
  UNSPLASH = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_APIKEY}&orientation=landscape&auto=format`;

const body = document.querySelector("body"),
  locationContainer = document.querySelector(".js-location span");



function loadBackground() {
  const savedImage = localStorage.getItem("bg");
  const today = new Date();
  const month = today.getMonth()+1;
  const selectSeason = 3<=month && month <=5 ? "spring" 
                    : 6<=month && month <= 8 ? "summer"
                    : 9<=month && month <= 11 ? "fall" : "winter";
  
  if (savedImage === null) {
    getBackground(selectSeason);
  } else {
    const parsedImage = JSON.parse(savedImage);    
    
    if (today > parsedImage.expiresOn) {
      getBackground();
    } else {
      body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${
        parsedImage.url
      })`;
      console.log(parsedImage.city);  
      if (parsedImage.name !== null 
          && parsedImage.city !== null
          && parsedImage.country !== null) {
            locationContainer.innerHTML = `${parsedImage.name}, ${
              parsedImage.city
            }, ${parsedImage.country}`;
      } else {
        locationContainer.innerHTML = "unsplash.com";
      }
      
    }
  }
  return;
}

function saveBackground(imageUrl, city, country, name) {
  const savedImage = localStorage.getItem("bg");
  if (savedImage !== null) {
    localStorage.removeItem("bg");
  }
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);
  const imageObject = {
    url: imageUrl,
    expiresOn: expirationDate,
    city,
    country,
    name
  };
  console.log(imageObject);
  localStorage.setItem("bg", JSON.stringify(imageObject));
  loadBackground();
  
}

function getBackground(selectSeason){
  fetch(UNSPLASH+`query=${selectSeason}`)
    .then(response => response.json())          
    .then(json => {
      const image = json;      
      // console.log(image);
      // console.log(image.urls);
      if (image.urls && image.urls.full && image.location) {
        
        const fullUrl = image.urls.full;
        const location = image.location;
        const city = location.city;
        const country = location.country;
        const name = location.name;
        saveBackground(fullUrl, city, country, name);
      } else {
        getBackground(selectSeason);
      }
    });  
    
}


function init(){
  loadBackground();
}

init();