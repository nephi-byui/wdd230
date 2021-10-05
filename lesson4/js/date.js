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

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('visible')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */

