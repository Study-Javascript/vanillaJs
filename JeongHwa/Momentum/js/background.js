const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
 
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //img태그 생성

bgImage.src = `img/${chosenImage}`; //random 이미지 삽입

document.body.appendChild(bgImage); //bgImage html의 body에 추가
