const UNSPLASH_APIKEY="PDToVYZCm6MnMatLfE0hlnuz2mMAD2wsz5Arx9Z5mIk",
  UNSPLASH = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_APIKEY}&query=landscape&orientation=landscape&auto=format`;

const body = document.querySelector("body"),
  locationContainer = document.querySelector(".js-location span");

function loadBackground() {
  const savedImage = localStorage.getItem("bg");
  if (savedImage === null) {
    getBackground();
  } else {
    const parsedImage = JSON.parse(savedImage);
    const today = new Date();
    if (today > parsedImage.expiresOn) {
      getBackground();
    } else {
      body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${
        parsedImage.url
      })`;
      locationContainer.innerHTML = `${parsedImage.name}, ${
        parsedImage.city
      }, ${parsedImage.country}`;
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

function getBackground(){
  fetch(UNSPLASH)
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
        getBackground();
      }
    });  
    
}


function init(){
  loadBackground();
}

init();