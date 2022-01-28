const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //for save todos

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // array형태로 저장
}

function deleteToDo(event) {
  //click한 버튼이 있는 li를 삭제
  //console.dir(event.target.parentElement.innerText); // 무엇이 클릭된 건지 확인
  const li = event.target.parentElement; // target(클릭한 것)의 부모 element에 click event
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✅";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // id : 각각의 li item을 구별하기 위함
  };
  toDos.push(newTodoObj); //array에 todo 저장. db로 push
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

// function sayHello(item) {
//   console.log("This is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  //localStorage에서 온 String으로 js jbg로 변함
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  //forEach : array의 각 item에 대해 function 실행하게 해 줌
  //parseToDos가 가진 각각의 item에 대해 sayHello function 실행
  //parsedToDos.forEach(sayHello);
  //parsedToDos.forEach((item) => console.log("this is the turn of ", item)); //arrow function
  parsedToDos.forEach(paintToDo);
}

