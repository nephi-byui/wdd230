// SCRIPTS FOR PRESTON ONLY

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

// get preston weather
const PRESTON = 5604473

get_weather_summary_for(PRESTON)
get_forecast_for(PRESTON)
get_events_for('Preston')