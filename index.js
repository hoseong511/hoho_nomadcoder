const test = document.getElementById("title");
test.innerHTML = " Hi! from JS";
test.style.color = "white";
document.title = "Wtf"
console.dir(test)

function handleResize(event){
  console.log(event);
}

function handleclick(event){
  console.log(title.style.color);
  if (title.style.color == "red"){
    console.log("hi");
    title.style.color="blue";
    title.innerHTML =`x: ${event.screenX}, y: ${event.screenY}`;
    console.log(event);
  } else{
    title.style.color="red";
    title.innerHTML =`x: ${event.screenX}, y: ${event.screenY}`;
  }
}

window.addEventListener("click", handleclick);
