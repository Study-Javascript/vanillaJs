const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const dayOfWeek1 = mon + tue + wed + thu + fri + sat + sun;

//Array
//배열은 0부터 시작
//위에서 정의한 요일을 가져와 배열에 넣음.
const dayOfWeek2 = [mon, tue, wed, thu, fri, sat, sun];
//문자값을 배열에 바로 넣을수 있음.
const dayOfWeek3 = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(dayOfWeek1);
console.log(dayOfWeek2);
console.log(dayOfWeek3);

//배열에서 값 받아오기 
console.log(dayOfWeek3[5]); //sat 출력(배열의 6번째 값)

//배열에 값 추가하기
dayOfWeek3.push("sun");
console.log(dayOfWeek3);

const playerName = "Gong";
const playerPoints = 121212;
const palyerHandsome = true;
const playerFat = "little bit";


//Object : player.name , player.point ... 로 표현
//player[0] == name , player[1] == points...
const player = {
    name:"Gong", 
    points:10, 
    handsome:true, 
    fat:"little bit"
}; //object

console.log(player);
console.log(player.name); //Gong
console.log(player["name"]); //Gong

//object update
player.handsome = false;
player.points = player.points + 15; // 기존값 + 15로 업데이트
console.log(player);
player.pretty = "soon"; //item 추가
//const는 수정이 불가능하지만 object를 수정하는 것은 가능하다
//player = true => const를 수정하는것이므로 에러발생

player.lastName = "JeongHwa"; //object 값 추가
console.log(player);


