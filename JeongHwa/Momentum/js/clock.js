const clock = document.querySelector("h2#clock");

/*
function sayHello() {
   console.log("hello");
}
//Interval : 매번 일어나야 하는 무언가 (반복)
setInterval(sayHello, 5000); //5000 = 5초

//timeout : 한번 발생
setTimeout(sayHello, 5000);
*/

function getClock() {
   const date = new Date;
   
   //padStart(자릿수, 채워질글자) : string에 쓸 수 있음. 부족한 자리는 앞쪽에 채워짐.
   //String(number) : number타입 -> String타입으로 형변환
   const hours = String(date.getHours()).padStart(2,"0");
   const minutes = String(date.getMinutes()).padStart(2,"0"); 
   const seconds =  String(date.getSeconds()).padStart(2,"0");

   clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock(); //website가 load되자마자 getClock() 실행
setInterval(getClock, 1000); //1초마다 실행

/* 
   date.getDate() : 일 
   date.getDay() :요일 (0 - 6 / 일 - 토)
   date.getFullYear() : 년도
   date.getHours()/getMinutes()/getSeconds() : 시/분/초
*/