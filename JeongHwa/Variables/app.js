//콘솔창에 출력
console.log(505050); 

//문자사용시 "" ,'' 둘다 사용가능
console.log("hello");
console.log('hello'); 

//공통된 값을 상수로 쓸 수 있다.
//const : constant(상수) - 업데이트(수정)가 불가능한 값 (기본값)
//let : 업데이트(수정)가 허용되는 값.
//var : 언제 어디서든 수정 할 수 있다. 어떤 규칙도 없음 (요즘은 잘 사용 안함.)
const a = 5;
const b = 2;

//a = 4 (에러)

console.log(a + b);
console.log(a * b);
console.log(a / b);

let myName = "JeongHwa";
console.log("hello " + myName);

myName = "GongJH"; //가능
console.log("hello " + myName);

