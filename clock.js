const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h3");



function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.className= "clock__text";
  clockTitle.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  
}

function init(){
  getTime();
  setInterval(getTime,1000);  
}

init();
