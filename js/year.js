const yearElement = document.querySelector('#footer-year');

function setCopyrightDate() {
    date = new Date();
    yearElement.innerHTML = date.getFullYear();
};

window.onload = setCopyrightDate() 
;