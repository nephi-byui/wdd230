// api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key} 

const APPID = "1da91723321396cba3166b2a18fc0112"
const Preston = 5604473
const SodaSprings = 0
const FishHaven = 0


function getWeatherFor(city_id) {

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${APPID}`

    fetch(apiURL)
        .then((response) => response.json())
        .then((weatherJSON) => {
            console.log(weatherJSON);

            // get temp, pass it to HTML element
            const currentTemp = weatherJSON.main.temp
            document.getElementById('current-temp').textContent = currentTemp;

            // icon
            const imagesrc = `https://openweathermap.org/img/w/${weatherJSON.weather[0].icon}.png`
            
            // etc
            const desc = weatherJSON.weather[0].description;
            document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
            document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
            document.getElementById('icon').setAttribute('alt', desc);

        })

}

getWeatherFor(Preston)