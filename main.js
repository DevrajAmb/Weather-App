let form = document.querySelector("form"); //THis is for selecting the form
let date = document.querySelector("date");//This is for the selection of the date
let tempreature = document.querySelector("tempreature"); //This is for selectiong the tempreature
let name1 = document.querySelector("name1");//THis is for the selecting the place name
let state = document.querySelector("state");//This is for the selecting the place state name
let speed1 = document.querySelector("speed1");//This is for the speed
let Direction = document.querySelector("Direction");//This is for the wind direction
let Quality = document.querySelector("Visible");//This is for the Visible distance
let image = document.querySelector("img");//This is for the selection of the image
let weather = document.querySelector("weather1");//This is for the getting the weather type
let input = document.querySelector("input");//This is for the input field







const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=050bad4ffa88458c9ed191817241712&q=${input.value}&aqi=yes
`);
const data = await response.json();
document.getElementById("tempreature").innerText = data.current.temp_c;
document.getElementById("weather1").innerText = data.current.condition.text;
document.getElementById("name1").innerText = data.location.name; 
document.getElementById("state").innerText = data.location.region; 
document.getElementById("date").innerText = data.location.localtime; 
document.getElementById("speed1").innerText = data.current.wind_kph; 
document.getElementById("Direction").innerText = data.current.wind_dir; 
document.getElementById("Visible").innerText = data.current.vis_km;
image.setAttribute('src', data.current.condition.icon);
document.getElementById("input1").reset();

};

form.addEventListener("submit", fetchWeather);