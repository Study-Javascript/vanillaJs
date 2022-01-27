
//class hello의 첫번째 h1을 찾아 출력
const h1 = document.querySelector("div.hello:first-child h1");

console.log(h1);

console.dir(h1);
//on- : event가 가능하다. => 사용할때는 on을 빼고 선언하면 된다.



/*function handleTitleClick(){  
    console.log("title was clicked!!");
    //title의 css 수정
    h1.style.color = "blue";
}*/

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor; //수정가능한 변수 선언
    if(currentColor === "blue") {
        newColor = "tomato";
    }else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}
 
h1.addEventListener("click", handleTitleClick); //handleTitleClick()이 아님!



function handleMouseEnter(){
    h1.innerText = "Mouse is here!"
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!"
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!!");
}

function handleWindowOffline(){
    alert("SOS no WIFI!");
}

function handleWindowOnline(){
    alert("ALL GOOOOOD!!");
}
 
h1.addEventListener("click", handleTitleClick); //handleTitleClick()이 아님!
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
// h1.removeEventListener - 이벤트를 지울수 있음

//위에와 같은 결과가 나오지만 위의 형태로 쓰는게 더 좋다.
//h1.onclick = handleTitleClick;
//h1.onmouseenter = handleMouseEnter
//h1.onmouseleave = handleMouseLeave;

//window창 화면크기 바뀔때 발생하는 event
window.addEventListener("resize", handleWindowResize);
//복사했을때 발생하는 event
window.addEventListener("copy", handleWindowCopy);

//wifi연결 해제에 관한 event
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
