// Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)."

function get_wind_chill(temp_f,wind_speed_mph) {

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

// windchill
const TempF = document.querySelector(".var-temp-f");
const WindSpeed = document.querySelector(".var-wind-speed")
const WindChill = document.querySelector(".var-wind-chill")

temp_f = parseFloat(TempF.innerHTML)
wind_speed_mph = parseFloat(WindSpeed.innerHTML)
computed_wind_chill = get_wind_chill(temp_f,wind_speed_mph);
WindChill.innerHTML = computed_wind_chill       