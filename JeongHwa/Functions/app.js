//function : 반복해서 사용할 수 있는 
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
}

sayHello("Gong",10); //sending data(데이터를 function으로 보내는 방법)
sayHello("Lee",22);
sayHello("Han",13);
sayHello("Pack",15);

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}
//console.log(firstNumber + secondNumber) 에러 function 안에서만 존재할 수 있음.

function divide(firstNumber, secondNumber){
    console.log(firstNumber/secondNumber);
}

plus(8, 60);
plus(3,40,44,33); //많은 값을 넣어도 argument갯수만큼만 들어감.
divide(98,20);

const player = {
    name:"JeongHwa",
    //object안에서도 function선언 가능
    sayHello: function(otherPersonName){
        console.log("hello "+ otherPersonName +" nice to meet you!");       
    },
};

console.log(player.name);
player.sayHello("Han");
player.sayHello("Lee");

