const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;  
  
  toDoList.removeChild(li); 
  
  const cleantoDos = toDos.filter(function(toDo){
    console.log(toDo.id, parseFloat(li.id));
    return toDo.id !== parseFloat(li.id);
  });
  console.log(cleantoDos);
  toDos = cleantoDos
  saveToDos();
}

function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}



function paintToDo(text){   
  const id = Math.random() * 10;
  const li = document.createElement("li");
  const delBtn = document.createElement("span");  
  const span = document.createElement("label"); 
  delBtn.className = "del__btn"
  delBtn.innerText= "❌";
  delBtn.addEventListener("click",deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = id;
  toDoList.appendChild(li);
  
  const toDoObj = {
    text: text,
    id : id
  }
  toDos.push(toDoObj);
  saveToDos();  
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value="";
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text, toDo.id);
    })
  }
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();