const firstVisitRemove = document.querySelector('.clear-first-time')
const hitCounterSentence = document.querySelector('.hitcounter-sentence')
const visitCount = document.querySelector('.visit-count')

const daysAgo = document.querySelector('.days-ago');
const thisVisit = document.querySelector('.this-visit');
const lastVisit = document.querySelector('.last-visit');

const display_options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }

function days_ago() {

    // check today's date
    this_visit = new Date()
    this_visit_string = this_visit.toLocaleDateString(undefined, display_options);

    // get last visit date
    stored_value = localStorage.getItem("last-visit");

    if (stored_value != null) {
        last_visit = new Date(stored_value);
        last_visit_string = last_visit.toLocaleDateString(undefined, display_options);
    };

    // if this is the first time to visit
    if (stored_value == null) {

        // display current date
        thisVisit.innerHTML = this_visit_string

        // hide irrelevant data
        firstVisitRemove.innerHTML = null

        // add to hitcounter
        localStorage["visit-counter"] = 1

        // display a message
        hitCounterSentence.innerHTML = "According to your browser, this is your first visit. Welcome! ";
        
        // store time of visit
        localStorage.setItem("last-visit", this_visit)

    } else {

        // display today's date.
        thisVisit.innerHTML = this_visit_string

        // display the last visit date:
        lastVisit.innerHTML = last_visit_string;

        // compute the days passed
        milliseconds_passed = this_visit - last_visit;
        days_passed_float = milliseconds_passed / 86400000;

        // convert it into a string to be displayed and display it
        days_passed = days_passed_float.toFixed(0);
        daysAgo.innerHTML = days_passed;
        
        //set the new last visited date
        localStorage["last-visit"] = this_visit

        // reset null or NaN visit counter
        if (localStorage["visit-counter"] == null) {
            localStorage["visit-counter"] = 1
        } else if (localStorage["visit-counter"] == "NaN") {
            localStorage["visit-counter"] = 1
        };
    
        // update visit counter +1
        localStorage.setItem("visit-counter",
                            (parseInt(localStorage["visit-counter"]) + 1));

        // display visit counter new value
        visitCount.innerHTML = localStorage["visit-counter"]
    }
};

days_ago();
