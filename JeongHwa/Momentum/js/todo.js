const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
//== const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; // 입력한 todo 저장할 배열

function saveToDos() {
   //localStorage.setItem("todos",toDos); //localStorage에 저장 (text로 저장)
   //JSON.stringify(값) : javascript의 object나 array또는 어떤 코드던 string으로 만들어줌.
   //[1,2,3,4] -> ["1","2","3","4"]
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
   //JSON.parse(값) : string값을 array로 
}


function deleteToDo(event) {
   const li = event.target.parentElement; // 클릭한 button의 li정보
   li.remove();
   toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
   saveToDos();
}

function paintTodo(newTodo) {
   const li = document.createElement("li");
   li.id = newTodo.id;
   const span = document.createElement("span");
   span.innerText = newTodo.text;

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
   const newTodoObj = {
      text:newTodo,
      id:Date.now(), //id:랜덤값(Date.now는 시간이 들어가는데 랜덤값처럼 보임 -> 중복X)
   }
   toDos.push(newTodoObj); //toDos배열에 저장
   paintTodo(newTodoObj);
   saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*function sayHello(item) {
   console.log("this is the turn of ", item);
}*/

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
   const parsedToDos = JSON.parse(savedToDos);

   //parsedToDos.forEach(sayHello);
   //function을 만들지 않고 아래와 같이 쓸 수 있다.
   //parsedToDos.forEach((item) => console.log("this is the turn of ", item));

   toDos = parsedToDos; //이전값 
   parsedToDos.forEach(paintTodo);
}