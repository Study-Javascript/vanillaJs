
const age = 10;
function calculateKrAge1(ageOfForeigner){
    ageOfForeigner + 2;
}
const krAge1 = calculateKrAge1(age);
console.log(krAge1); //undefined


//return 
//함수를 사용했을 때 return값으로 대체됨. 
//function의 밖에서도 값을 받을 수 있음.
function calculateKrAge2(ageOfForeigner){
    return ageOfForeigner + 2;
}
const krAge2 = calculateKrAge2(age); //const krAge2 = retrun
console.log(krAge2);

const calculator = {
    add : function(a, b){
        return a + b;  
    },
    minus : function(a, b){
        return a - b;
    },
    multi : function(a, b){
        return a * b;
    },
    divide : function(a, b){
        return a / b;
    },
    power : function(a, b){
        return a ** b;
    }
}

//상호 의존적으로 값이 들어감(서로가 연결됨)
const plusResult = calculator.add(10, 8);
const minusResult = calculator.minus(plusResult,8);
const multiResult = calculator.multi(2, minusResult);
const divideResult = calculator.divide(multiResult, 4);
const powerResult = calculator.power(minusResult, divideResult);