
//class hello의 첫번째 h1을 찾아 출력
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    //h1의 class명 수정
    const clickedClass = "clicked";  //오타가 날경우엔 코드에러가 발생하기 때문에 변수로 사용하는것이 좋다.
    //if(h1.className === clickedClass) {
    //className 대신 classList를 사용하면 이전 className을 같이 사용할 수 있다.  
    if(h1.classList.contains(clickedClass)){
        //h1.className = "";
        h1.classList.remove(clickedClass);
    }else {
        //h1.className = clickedClass;
        h1.classList.add(clickedClass);
    }
}

//위의 remove, add => toggle
function handleToggle() {
    h1.classList.toggle("clicked");
}
 
//h1.addEventListener("click", handleTitleClick); //handleTitleClick()이 아님!
h1.addEventListener("click", handleToggle); //handleTitleClick()이 아님!
