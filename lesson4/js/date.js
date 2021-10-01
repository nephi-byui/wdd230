const dateElement = document.querySelector('#footer-date');

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

function setDate() {
    today = new Date().toLocaleDateString(undefined, options);
    dateElement.innerHTML = today;
};

window.onload = setDate() 
;