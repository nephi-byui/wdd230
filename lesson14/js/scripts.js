/* HEADER */

const menuButton = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.navigation')

menuButton.addEventListener('click', () => {mainNav.classList.toggle('visible')}, false);

// if nav is open and viewport is resized, the nav will close
// and not come back even if viewport becomes small again
window.onresize = () => {
    if (window.innerWidth > 960) {
        mainNav.classList.remove('visible')
    }
};

/* FOOTER */

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const dateElement = document.querySelector('#footer-date');

var footerDate = function() {
    today = new Date()
    footer_date_string = today.toLocaleDateString(undefined, options);

    // set the footer date
    dateElement.innerHTML = footer_date_string;
};








/* IMAGES */
/* loader */

let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

/* >> lazy loader - intersection observer */

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
    } else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
    }



/* run on load for all pages */
footerDate()