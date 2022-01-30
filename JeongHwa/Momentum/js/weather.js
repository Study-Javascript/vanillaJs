const API_KEY = "7535f635065c9a09b71e91e72f4db9a2"; //Weather API 개인키 

function onGeoOk(position) {
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   fetch(url)
      .then(Response => Response.json())
      .then(data => {
         const weather = document.querySelector("#weather span:first-child");
         const city = document.querySelector("#weather span:last-child");
         city.innerText = data.name; //도시이름
         weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; // 날씨
   });

}
function onGroError() {
   alert("Can't find you. No weather for you.")
}


//getCurrentPosition(SuccessCallback, ErrorCallback)
navigator.geolocation.getCurrentPosition(onGeoOk, onGroError); // 위치잡음.