//prompt 
//사용자에게 입력할 수 있는 창
//prompt를 입력하기 전에는 javasript의 코드가 정지되어있음.
//css가 적용되지 않아 잘 사용하지 않는다.
const age = prompt("How old are you?"); 
console.log(age); //prompt에 값을 넣기전엔 null

//parseInt : string타입을 number타입으로 형변환 
//형변환 대상자가 문자이면 NaN으로 표기.
console.log(age, parseInt(age)); 
console.log(typeof age, typeof parseInt(age)); 

const numberAge = parseInt( prompt("How old are you?"));
console.log(numberAge, typeof numberAge); // number

console.log(isNaN(numberAge)); //NaN(Not a Number) - boolean으로 출력


if(isNaN(numberAge)){
    //condition === true
    console.log("Please write a number");
}else {
    //condition === false
    console.log("Thank you for writing your age.")
}

// ||(OR) : 둘중 하나의 조건만 true 여도 true 
// &&(AND) : 둘다 true 여야 true
// 조건이 겹칠때는 위에 적은 조건문이 실행된다.
if(isNaN(numberAge) || numberAge < 0){
    //condition === true
    console.log("Please write a real positive number");
}else if(numberAge < 18) {
    //위의 condition == false
    //condition === true
    console.log("You are too young");
}else if(numberAge >= 18 && numberAge <= 50) {
    console.log("You are too young");
}else if(numberAge >50 && numberAge <= 80) {
    console.log("You should exercise");
}else if(numberAge === 100) {
    console.log("Wow you are wise");
}else if(numberAge > 80){
    console.log("You can do whatever you want.");
}
