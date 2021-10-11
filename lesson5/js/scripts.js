const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

// footer date
const dateElement = document.querySelector('#footer-date');

// banner to be visible on Friday only
const fridayBanner = document.querySelector('#friday-banner')

function pageLoad() {
    today = new Date()
    footer_date_string = today.toLocaleDateString(undefined, options);

    // set the footer date
    dateElement.innerHTML = footer_date_string;

    // set class to "visible" if day is Friday (5)
    day = today.getDay();
    if (day == 5) {
        fridayBanner.className = "visible";
        }
    };

window.onload = pageLoad() 
;

/* NAV */

const menuButton = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.navigation')

menuButton.addEventListener('click', () => {mainNav.classList.toggle('visible')}, false);

// if nav is open and viewport is resized, the nav will close, and not come back even if viewport becomes small again
window.onresize = () => {if (window.innerWidth > 960) mainNav.classList.remove('visible')};