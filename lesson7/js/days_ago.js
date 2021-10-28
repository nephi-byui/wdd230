const firstVisitRemove = document.querySelector('.clear-first-time')
const daysAgo = document.querySelector('.days-ago');
const thisVisit = document.querySelector('.this-visit');
const lastVisit = document.querySelector('.last-visit');

const display_options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }

function days_ago() {

    // check today's date
    this_visit = new Date()

    // get last visit date
    stored_value = localStorage.getItem("last-visit");
    //int = parseInt(stored_value)
    //last_visit = new Date(parseInt(localStorage.getItem("last-visit"))); 
    last_visit = new Date(stored_value)

    // if this is the first time to visit, display a message.
    if(last_visit == null) {

        // display a message
        firstVisitRemove.innerHTML = ""
        
        // store time of visit
        localStorage.setItem("last-visit", this_visit)

    } else {


        //last_visit_string = last_visit.toLocaleDateString(undefined, display_options);

        // generate strings
        this_visit_string = this_visit.toLocaleDateString(undefined, display_options);
        last_visit_string = last_visit.toLocaleDateString(undefined, display_options);

        // display today's date.
        thisVisit.innerHTML = this_visit_string

        // display the last visit date:
        lastVisit.innerHTML = last_visit_string;

        // compute the days passed
        milliseconds_passed = this_visit - last_visit
        days_passed_float = milliseconds_passed / 86400000
        days_passed = days_passed_float.toFixed(0);

        // retrieve the last visited date and display it:
        daysAgo.innerHTML = days_passed;
        
        //set the new last visited date
        localStorage["last-visit"] = this_visit
    }

};

days_ago();