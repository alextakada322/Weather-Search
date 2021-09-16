
let weatherData;


const $input = $('input[type="text"]')

const API_KEY = '810f158ecf4ad2e4fcd3524b8799eeeb';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function handleGetData(event) {
    event.preventDefault();
    let city = $input.val()

    $.ajax(`${BASE_URL}q=${city}&units=imperial&appid=${API_KEY}`)
        .then(
        function(data){
            console.log(BASE_URL + city + API_KEY)
            weatherData = data;
            console.log(weatherData)
        render()
        },
        function(error){
            console.log('bad request', error);
        })
    }
    function render(data) {
        const { name } = weatherData;
        const { description } = weatherData.weather[0]
        const { temp, humidity, pressure } = weatherData.main
        const { speed } = weatherData.wind
    console.log(name,description,temp,humidity,pressure,speed)
        document.querySelector(".city").innerText = name;
        document.querySelector(".temperature").innerText = temp + "°F"
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity Level: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "MPH";
        document.querySelector(".pressure").innerText = "Pressure: " + pressure + "hPa";
    }

    $('form').on('submit', handleGetData);
    





   