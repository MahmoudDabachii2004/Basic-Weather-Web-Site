const searchButton = document.getElementById('searchButton');
const menu = document.getElementById('container');
const positionInput = document.getElementById('positionInput');
const suiteMenu = document.getElementById('principal');
const imageEtat = document.getElementById('imageEtat');
import { changeImage } from "./differentWeatherImg.js";

const api = 'https://api.weatherapi.com/v1/current.json?key=4ebd0e1dec8d408eb3a223146242901&q='

const temperature = document.getElementById("temperature");
const meteo = document.getElementById("meteo");
const humidity = document.getElementById("humidityValue");
const wind = document.getElementById("windSpeed");




let numberClick = 0;
searchButton.addEventListener('click', function() {
    console.log(positionInput.value)
    if (numberClick === 0 && positionInput.value != "") {
        showValues(positionInput.value)

        
    } 
    else {
        showValues(positionInput.value)
    }

})

const showValues = (values) => {
    fetch(api + values + '&aqi=no')
    .then(res => {
            if (!res.ok) {
                throw new Error('Bad Request - Please provide a valid location.');
            }
            return res.json();
        })
        .then(data => {
            changeImage(data.current.condition.code, imageEtat)
            numberClick++
            menu.style.height = '500px';
            menu.style.bottom = '200px';
            menu.style.paddingBottom = '0px';
            suiteMenu.style.visibility = 'visible'
            suiteMenu.style.opacity = '1';

            temperature.textContent = data.current.temp_c;
            meteo.textContent = data.current.condition.text;
            wind.textContent = data.current.wind_kph + ' Km/h';
            humidity.textContent = data.current.humidity;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}