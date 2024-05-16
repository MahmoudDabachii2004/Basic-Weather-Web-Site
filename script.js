const searchButton = document.getElementById('searchButton');
const menu = document.getElementById('container');
const positionInput = document.getElementById('positionInput');
const suiteMenu = document.getElementById('principal');
const imageEtat = document.getElementById('imageEtat');


const api = 'https://api.weatherapi.com/v1/current.json?key=4ebd0e1dec8d408eb3a223146242901&q='

const temperature = document.getElementById("temperature");
const meteo = document.getElementById("meteo");
const humidity = document.getElementById("humidityValue");
const wind = document.getElementById("windSpeed");




var numberClick = 0;


searchButton.addEventListener('click', function() {
    console.log(positionInput.value)
    if (numberClick === 0 && positionInput.value != "") {
        showValues(positionInput.value)

        
    } 
    else {
        showValues(positionInput.value)
    }

})

function showValues(values) {
    fetch(api + values + '&aqi=no')
    .then(res => {
            if (!res.ok) {
                throw new Error('Bad Request - Please provide a valid location.');
            }
            return res.json();
        })
        .then(data => {
            changeImage(data.current.condition.code)
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


function changeImage(code) {
    switch (code) {
        case 1000:
            imageEtat.src = 'clear.png'
            break
        case 1003:
            imageEtat.src = 'mist.png'
            break
        case 1006:
            imageEtat.src = 'clouds.png'
            break
        case 1009:
            imageEtat.src = 'clouds.png'
            break
        case 1030:
            imageEtat.src = 'mist.png'
            break
        case 1063:
            imageEtat.src = 'drizzle.png'
            break
        case 1066:
            imageEtat.src = 'snow.png'
            break
        case 1069:
            imageEtat.src = 'snow.png'
            break
        case 1072:
            imageEtat.src = 'snow.png'
            break
        case 1087:
            imageEtat.src = 'drizzle.png'
            break
        case 1114:
            imageEtat.src = 'snow.png'
            break
        case 1117:
            imageEtat.src = 'snow.png'
            break
        case 1135:
            imageEtat.src = 'clouds.png'
            break
        case 1147:
            imageEtat.src = 'clouds.png'
            break
        case 1150:
            imageEtat.src = 'drizzle.png'
            break
        case 1153:
            imageEtat.src = 'drizzle.png'
            break
        case 1168:
            imageEtat.src = 'drizzle.png'
            break
        case 1171:
            imageEtat.src = 'drizzle.png'
            break
        case 1180:
            imageEtat.src = 'rain.png'
            break
        case 1183:
            imageEtat.src = 'rain.png'
            break
        case 1186:
            imageEtat.src = 'rain.png'
            break
        case 1189:
            imageEtat.src = 'rain.png'
            break
        case 1192:
            imageEtat.src = 'rain.png'
            break
        case 1195:
            imageEtat.src = 'rain.png'
            break
        case 1198:
            imageEtat.src = 'rain.png'
            break
        case 1201:
            imageEtat.src = 'rain.png'
            break
        case 1204:
            imageEtat.src = 'snow.png'
            break
        case 1207:
            imageEtat.src = 'snow.png'
            break
        case 1210:
            imageEtat.src = 'snow.png'
            break
        case 1213:
            imageEtat.src = 'snow.png'
            break
        case 1216:
            imageEtat.src = 'snow.png'
            break
        case 1219:
            imageEtat.src = 'snow.png'
            break
        case 1222:
            imageEtat.src = 'snow.png'
            break
        case 1225:
            imageEtat.src = 'snow.png'
            break
        case 1237:
            imageEtat.src = 'snow.png'
            break
        case 1240:
            imageEtat.src = 'rain.png'
            break
        case 1243:
            imageEtat.src = 'rain.png'
            break
        case 1246:
            imageEtat.src = 'rain.png'
            break
        case 1249:
            imageEtat.src = 'snow.png'
            break
        case 1252:
            imageEtat.src = 'snow.png'
            break
        case 1255:
            imageEtat.src = 'snow.png'
            break
        case 1258:
            imageEtat.src = 'snow.png'
            break
        case 1261:
            imageEtat.src = 'snow.png'
            break
        case 1264:
            imageEtat.src = 'snow.png'
            break
        case 1273:
            imageEtat.src = 'rain.png'
            break
        case 1276:
            imageEtat.src = 'rain.png'
            break
        case 1279:
            imageEtat.src = 'snow.png'
            break
        case 1282:
            imageEtat.src = 'snow.png'
            break
        default:
            return {
                day: "Unknown",
                night: "Unknown",
                icon: -1
            };
    }
}
