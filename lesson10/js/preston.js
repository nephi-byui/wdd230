// banner to be visible on Friday only
const fridayBanner = document.querySelector('#friday-banner');

// set class to "visible" if day is Friday (5)
function check_friday_banner() {
    
    today = new Date()
    day = today.getDay();
    if (day == 5) {
        fridayBanner.className = "visible";
    }
};

check_friday_banner()

// get preston weather


const Preston = 5604473

populate_weather_summary_for(Preston)

/*


fetch(apiURL) 
    .then((response) => response.json())
    .then((weatherJSON) => {
        console.log(weatherJSON);

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

    })

    */
/*
    weather_desc
    temp_f
    Wind_chill
    humidity
    wind_speed_mph*/

//preston_summary = get_weather_summary_for(Preston)

//console.log(preston_summary)

//console.log(get_f_from_k(0))


   
