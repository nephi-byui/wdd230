
/* api key exposed for all the world to see */
const APPID = "1da91723321396cba3166b2a18fc0112"

const QC_LATITUDE = 14.6760
const QC_LONGITUDE = 121.0437

var get_weather = function(latitude,longitude) {
    
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=None&appid=${APPID}`

    fetch(apiURL)
    
    .then((response) => response.json())
    .then((weatherJSON) => {

        if (DEBUG_MODE == true){
        console.log("RESPONSE : ")
        console.log(weatherJSON)};
        console.log()

        // town name 
        const town_name = weatherJSON.name

        //the current condition description,
        const weather_desc = weatherJSON.current.weather[0].description;

        //the high or current (or both) temperature(s) in Fahrenheit,
        const temp_k = weatherJSON.current.temp;
    
        const temp_f = get_f_from_k(temp_k)
        const temp_f_string = temp_f.toFixed(1)

        //the humidity,
        const humidity = weatherJSON.current.humidity;

        //the wind speed, and
        const m_per_sec = weatherJSON.current.wind_speed;
        const wind_speed_mph = m_per_sec * 2.236936
        const wind_speed_string = `${wind_speed_mph.toFixed(1)}`

        //should still calculate and display the wind chill factor.
        const wind_chill = get_wind_chill(temp_f,wind_speed_mph)

        if (DEBUG_MODE == true) {
        console.log('*DEBUG MODE IS ON*')
        console.log(`name = ${town_name}`)        
        console.log(`weather_desc = ${weather_desc}`)        
        console.log(`temp_k = ${temp_k}`)        
        console.log(`temp_f = ${temp_f}`)        
        console.log(`humidity = ${humidity}`)        
        console.log(`wind_speed_mph = ${wind_speed_mph}`)
        console.log(`wind_chill = ${wind_chill}`)
        }

        /* update HTML Form flements*/        
        document.querySelector(".var-weather-desc").innerHTML = weather_desc
        document.querySelector(".var-weather-desc").style.textTransform = "capitalize";
        document.querySelector(".var-temp-f").innerHTML = temp_f_string
        document.querySelector(".var-wind-chill").innerHTML = wind_chill
        document.querySelector(".var-humidity").innerHTML = humidity
        document.querySelector(".var-wind-speed").innerHTML = wind_speed_string
        
        if (wind_chill == "N/A") {
            if (temp_f > 50 && wind_speed_mph <= 3) {
                var windchill_message = "* wind chill undefined, temperature above 50°F, wind speed must be higher than 3 mph"
            }
            
            else if (temp_f > 50 && wind_speed_mph > 3) {
                var windchill_message = "* wind chill undefined, temperature above 50°F"
            }

            else if (temp_f <= 50 && wind_speed_mph <= 3) {
                var windchill_message = "* wind chill undefined, wind speed must be higher than 3 mph"
            }
            document.querySelector(".wind-chill-message").innerHTML = windchill_message
        }
        

    })
}



get_weather(QC_LATITUDE,QC_LONGITUDE)


const WeatherAlertElement = document.getElementById("weather-alert")

const hide_weather_alert = () => {
    WeatherAlertElement.classList.add("hidden");
}

document.getElementById('weather-alert-close').addEventListener("click",hide_weather_alert);


