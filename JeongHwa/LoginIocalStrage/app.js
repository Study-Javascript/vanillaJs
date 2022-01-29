const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//대문자로 쓰는건 관습(일반적으로 string만 포함된 변수에서 사용)
const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";

const link = document.querySelector("a");

function onLoginSubmit(event) {
   event.preventDefault(); //1. 이벤트 실행막음
   loginForm.classList.add(HIDDEN_CLASSNAME); //2. form태그 hidden
   const username = loginInput.value;//3. value 값 저장

   //localStorage에 저장
   localStorage.setItem("USERNAME_KEY", username); //4. localstorage에 값 저장
   paintGreetings(username); // 5. 함수 호출
   //paintGreetings(); //localStorage.getItem 사용시
}

function paintGreetings(username) { 
//function paintGreetings() { //localStorage.getItem 사용시
//   const username = localStorage.getItem(USERNAME_KEY);
   greeting.innerHTML = `Hello ${username}`; //h1에 텍스트 추가
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem("USERNAME_KEY");

if(savedUserName === null) { 
   //show the username
   loginForm.classList.remove(HIDDEN_CLASSNAME); //hidden클래스 제거
   loginForm.addEventListener("submit", onLoginSubmit); //submitEvent
}else {
   //show the greetings
   paintGreetings(savedUserName);
   //paintGreetings(); //localStorage.getItem 사용시

}