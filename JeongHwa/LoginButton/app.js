const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {

   const username = loginInput.value;
   
   //로그인 유효성 검사
   if(username === "" ) { //공백
       alert("Please write your name");
   }else if(username.length > 15) { //15자 이상
    alert("Your name is too long.");
   }


}
loginButton.addEventListener("click", onLoginBtnClick);