const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
//== const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const toDos = []; // 입력한 todo 저장할 배열

function saveToDos() {
   //localStorage.setItem("todos",toDos); //localStorage에 저장 (text로 저장)
   //JSON.stringify(값) : javascript의 object나 array또는 어떤 코드던 string으로 만들어줌.
   //[1,2,3,4] -> ["1","2","3","4"]
   localStorage.setItem("todos", JSON.stringify(toDos));
   //JSON.parse(값) : string값을 array로 


}

function deleteToDo(event) {
   const li = event.target.parentElement; // 클릭한 button의 li정보
   li.remove();
}

function paintTodo(newTodo) {
   const li = document.createElement("li");
   const span = document.createElement("span");
   span.innerText = newTodo;

   const button = document.createElement("button");
   button.innerText = "❌";
   button.addEventListener("click", deleteToDo);

   li.appendChild(span); //li의 자식태그 span
   li.appendChild(button);

   toDoList.appendChild(li); //toDoList의 자식태그 li
}

function handleToDoSubmit(event) {
   event.preventDefault();
   const newTodo = toDoInput.value; //toDoInput의 value를 newTodo에 복사
   toDoInput.value = ""; //toDoInput의 value 비우기
   toDos.push(newTodo); //toDos배열에 저장
   paintTodo(newTodo);
   saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
   console.log("this is the turn of ", item);
}


const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos != null) {
   const parsedToDos = JSON.parse(savedToDos);
   console.log(parsedToDos);
   parsedToDos.forEach(sayHello);
   //function을 만들지 않고 아래와 같이 쓸 수 있다.
   //parsedToDos.forEach((item) => console.log("this is the turn of ", item));
}
