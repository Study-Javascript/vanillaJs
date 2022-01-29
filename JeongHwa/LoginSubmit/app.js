const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
//대문자로 쓰는건 관습(일반적으로 string만 포함된 변수에서 사용)

const link = document.querySelector("a");

function onLoginSubmit(event) {
   const username = loginInput.value;
   // console.log(username);
   event.preventDefault(); //첫번째 argument안에 있는 function정보
   console.log(event); 
   loginForm.classList.add(HIDDEN_CLASSNAME);
   console.log(username);
   
   //두가지 방법모두 같은 값 출력 
   greeting.innerHTML = "Hello " + username;
   greeting.innerHTML = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
   
}

function handleLinkClick(event) {
   event.preventDefault(); //실행 막음.
   console.log(event); 
   alert("clicked!"); //페이지가 전환되기전 alert 실행.
}
loginForm.addEventListener("submit", onLoginSubmit); //submitEvent
link.addEventListener("click", handleLinkClick); //MouseEvent
