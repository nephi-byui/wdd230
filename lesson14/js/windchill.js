// Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)."



// windchill
const TempF = document.querySelector(".var-temp-f");
const WindSpeed = document.querySelector(".var-wind-speed")
const WindChill = document.querySelector(".var-wind-chill")

temp_f = parseFloat(TempF.innerHTML)
wind_speed_mph = parseFloat(WindSpeed.innerHTML)
computed_wind_chill = get_wind_chill(temp_f,wind_speed_mph);
WindChill.innerHTML = computed_wind_chill       