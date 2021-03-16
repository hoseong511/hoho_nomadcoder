const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  console.log(greeting);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  console.log(currentUser);
  if (currentUser === null){

  } else {
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init();