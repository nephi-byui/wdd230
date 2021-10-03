const dateElement = document.querySelector('#footer-date');

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

function setDate() {
    today = new Date().toLocaleDateString(undefined, options);
    dateElement.innerHTML = today;
};

window.onload = setDate() 
;


/* menu */

const hambutton = document.querySelector('.top-nav');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */

