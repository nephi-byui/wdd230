const dateElement = document.querySelector('#footer-date');

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

function setDate() {
    today = new Date().toLocaleDateString(undefined, options);
    dateElement.innerHTML = today;
};

window.onload = setDate() 
;


/* menu */

const menubutton = document.querySelector('.nav-toggle');
const mainnav = document.querySelector('.navigation')

menubutton.addEventListener('click', () => {mainnav.classList.toggle('visible')}, false);

// if nav is open and viewport is resized, the nav will close, and not come back even if viewport becomes small again
window.onresize = () => {if (window.innerWidth > 960) mainnav.classList.remove('visible')};