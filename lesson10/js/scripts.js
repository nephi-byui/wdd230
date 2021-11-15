/* GLOBAL */

/* HEADER */

const menuButton = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.navigation')

menuButton.addEventListener('click', () => {mainNav.classList.toggle('visible')}, false);

// if nav is open and viewport is resized, the nav will close
// and not come back even if viewport becomes small again
window.onresize = () => {
    if (window.innerWidth > 960) {
        mainNav.classList.remove('visible')
    }
};

/* FOOTER */

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const dateElement = document.querySelector('#footer-date');

var footerDate = function() {
    today = new Date()
    footer_date_string = today.toLocaleDateString(undefined, options);

    // set the footer date
    dateElement.innerHTML = footer_date_string;
};

/* functions */

/*    °F = (K − 273.15) × 9/5 + 32 */
var get_f_from_k = function(temp_k) {
    temp_f = (temp_k - 273.15) * 9/5 + 32
    return temp_f
}

/* Wind chill = 35.74 + 0.6215T – 35.75 (V^0.16) + 0.4275T (V^0.16) */
var get_wind_chill = function(temp_f,wind_speed_mph) {

    if (temp_f <= 50  && wind_speed_mph > 3) {

        wind_chill  = 35.74
                    + 0.6215 * temp_f
                    - 35.75 * wind_speed_mph ** 0.16
                    + 0.4275 * temp_f * wind_speed_mph ** 0.16

        wind_chill_str = wind_chill.toFixed(1)
        return (wind_chill_str +  " &#176;F")
    }

    else {
        return "N/A"
    }
}

var populate_weather_summary_for = function(city_id) {

    const APPID = "1da91723321396cba3166b2a18fc0112"
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${APPID}`

    fetch(apiURL)
    
    .then((response) => response.json())
    .then((weatherJSON) => {

        console.log(weatherJSON);

        // town name 
        const town_name = weatherJSON.name
        console.log(`name = ${town_name}`)

        //the current condition description,
        const weather_desc = weatherJSON.weather[0].description;
        console.log(`weather_desc = ${weather_desc}`)

        //the high or current (or both) temperature(s) in Fahrenheit,
        const temp_k = weatherJSON.main.temp_max;
        console.log(`temp_k = ${temp_k}`)
    
        const temp_f = get_f_from_k(temp_k)
        console.log(`temp_f = ${temp_f}`)

        //the humidity,
        const humidity = weatherJSON.main.humidity;
        console.log(`humidity = ${humidity}`)

        //the wind speed, and
        const m_per_sec = weatherJSON.wind.speed;
        const wind_speed_mph = m_per_sec * 2.236936
        console.log(`wind_speed_mph = ${wind_speed_mph}`)

        //should still calculate and display the wind chill factor.
        const wind_chill = get_wind_chill(temp_f,wind_speed_mph)
        console.log(`wind_chill = ${wind_chill}`)

        /* update HTML Form flements*/        
        document.querySelector(".var-weather-desc").innerHTML = weather_desc
        document.querySelector(".var-weather-desc").style.textTransform = "capitalize";
        document.querySelector(".var-temp-f").innerHTML = temp_f
        document.querySelector(".var-wind-chill").innerHTML = wind_chill
        document.querySelector(".var-humidity").innerHTML = humidity
        document.querySelector(".var-wind-speed").innerHTML = wind_speed_mph

    })
}

var get_forecast_for = function(city_id) {

}

window.onload = footerDate();