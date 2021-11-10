/* GLOBAL */

/* HEADER */

const menuButton = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.navigation')

menuButton.addEventListener('click', () => {mainNav.classList.toggle('visible')}, false);

// if nav is open and viewport is resized, the nav will close, and not come back even if viewport becomes small again
window.onresize = () => {
    if (window.innerWidth > 960) {
        mainNav.classList.remove('visible')
    }
};

/* FOOTER */

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const dateElement = document.querySelector('#footer-date');

function footerDate() {
    today = new Date()
    footer_date_string = today.toLocaleDateString(undefined, options);

    // set the footer date
    dateElement.innerHTML = footer_date_string;
};

footerDate()
//window.onload = pageLoad();