// javascript에서 .html의 title을 수정할 수 있다.
//document.title = "Hello! From JS";

//ElementId가 잘못되면propety null 에러 발생 
const title = document.getElementById("title");

console.dir(title);

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className); //empty

title.className = "Hellllllo~";
console.log(title.className); //className에 값 넣음
console.dir(title);

const hellos = document.getElementsByClassName("hello");
console.log(hellos); // 배열 형태로 출력

const divHello = document.getElementsByTagName("h2");
console.log(divHello);

//querySelector : element를 css방식으로 검색
//같은 형태의 class가 존재해도 첫번째 값만 가져옴
const divHello2 = document.querySelector(".divHello h2");
console.log(divHello2);

//같은 형태의 class가 존재할 때 모두 가져옴
const divHello3 = document.querySelectorAll(".divHello h2");
console.log(divHello3); // nodeList로 출력