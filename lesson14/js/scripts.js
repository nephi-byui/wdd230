/* turn off console.log() stuff when off */
let DEBUG_MODE = new Boolean(true)


/* GLOBAL */



if (DEBUG_MODE == true){
    console.log("***** DEBUG MODE IS ON *****")
    console.log("                   _     _ ")
    console.log("                  | |   (_)")
    console.log("  _ __   ___ _ __ | |__  _ ")
    console.log(" | '_ \\ / _ \\ '_ \\| '_ \\| |")
    console.log(" | | | |  __/ |_) | | | | |")
    console.log(" |_| |_|\\___| .__/|_| |_|_|")
    console.log("            | |            ")
    console.log("            |_|            ")
    console.log("                           ")
}
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







var get_forecast_for = function(city_id) {

    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${city_id}&appid=${APPID}`

    fetch(apiURL)
    
    .then((response) => response.json())
    .then((weatherJSON) => {

        if (DEBUG_MODE == true) {
            console.log(weatherJSON)
        }

        let five_day_forecast = {};
        let day_count = 0

        // populate five_day_forecast array

        for (let i = 0; i < (weatherJSON.list).length; i++ ) {
            forecast_time = weatherJSON.list[i].dt_txt

            if (forecast_time.includes("18:00:00") == true) {
                var dt = weatherJSON.list[i].dt
                var temp_k = weatherJSON.list[i].main.temp
                var temp_f = get_f_from_k(temp_k)
                var temp_f_string = `${temp_f.toFixed(1)} °F`
                var imagesrc = `https://openweathermap.org/img/w/${weatherJSON.list[i].weather[0].icon}.png`
                var weather_desc = weatherJSON.list[i].weather[0].description

                day = {
                    "date": dt,
                    "temp": temp_f_string,
                    "imagesrc": imagesrc,
                    "weather_desc": weather_desc
                }

                five_day_forecast[day_count] = day
                day_count = day_count + 1

            }
        }
        if (DEBUG_MODE == true) {
            console.log("five_day_forecast array:")
            console.log(five_day_forecast)
        }
        

        // populate HTML Form Elements

        const forecastBox = document.querySelector(".forecast-icons-box")
        forecastBox.innerHTML = ''

        for (let i = 0; i < 5; i++ ) {
            
            // create card
            let card = document.createElement('section');

            // date
            seconds = five_day_forecast[i].date            
            milliseconds = seconds * 1000
            forecast_date = new Date(milliseconds)

            let h4 = document.createElement('h4')
            const display_day_of_week = { weekday: 'long' }
            day_of_week = forecast_date.toLocaleDateString(undefined, display_day_of_week);
            h4.textContent = day_of_week
            card.appendChild(h4)

            let p = document.createElement('p')
            const date_and_month = { month: 'long', day: 'numeric' }
            date_and_month_string = forecast_date.toLocaleDateString(undefined, date_and_month);
            p.textContent = date_and_month_string
            p.className = 'month-and-date'
            card.appendChild(p)

            // icon
            let img = document.createElement('img')
            img.src = five_day_forecast[i].imagesrc
            img.alt = five_day_forecast[i].weather_desc
            card.appendChild(img)

            // temp
            let temp = document.createElement('p');
            temp.className = "forecast-temp-f"
            temp.textContent = five_day_forecast[i].temp
            card.appendChild(temp)

            // add card to div
            forecastBox.appendChild(card)
        }
    })
}

/* IMAGES */
/* loader */

let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

/* >> lazy loader - intersection observer */

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
    } else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
    }



/* run on load for all pages */
footerDate()