const apiKEY = "eb5ffb1b54bc26f7055e2f4a9d32e586";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=standard&q=germany";

async function checkWeather(){
 const response = await fetch(apiURL + `&appid=${apiKEY}`);
 var data = await response.json();

 console.log(data);
 
}

checkWeather();
