
const CardsDiv = document.getElementById('directory-cards')
const CardsViewButton = document.getElementById('cards-view')
const ListViewButton = document.getElementById('list-view')

const requestURL = 'https://nephi-byui.github.io/wdd230/lesson14/js/companies.json';
/* delete link */
/* MOCKY: https://run.mocky.io/v3/9189e2c3-872e-488b-a4c7-83bde983fae6' */
/* MOCKY DELETE: https://designer.mocky.io/manage/delete/9189e2c3-872e-488b-a4c7-83bde983fae6/N6x43lVhLVUyNz9eSJ5sqzDLdNivMeXRBN3S */



const fetchCards = () => {

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {

            const companies = jsonObject['companies'];

            CardsDiv.innerHTML = ''

            for (let i = 0; i < companies.length; i++ ) {
                
                // create card
                let card = document.createElement('section');

                // div
                let div = document.createElement('div')

                // headline
                let h2 = document.createElement('h2');
                h2.textContent = `${companies[i].name}`;
                div.appendChild(h2);

                // contact
                let contact = document.createElement('p');
                contact.innerHTML = `Contact: ${companies[i].contact}`;
                div.appendChild(contact);

                // birthplace
                let website = document.createElement('p');
                website.innerHTML = `<a href="${companies[i].website}">Website</a>`;
                div.appendChild(website);

                card.appendChild(div);

                // image
                let photo = document.createElement('img');
                photo.src = `images/companies/directory/${companies[i].logo}`;
                photo.alt = `${companies[i].name} Logo`
                photo.height = '300'
                photo.width = '300'

                card.appendChild(photo);

                // add card to div
                CardsDiv.appendChild(card);

}});}



const activate_cards_view = () => {

    // change the class
    CardsDiv.className = 'cards cards-view'

    // set the buttons
    CardsViewButton.className = 'activated'
    ListViewButton.className = ''
}

const activate_list_view = () => {

    // change the class
    CardsDiv.className = 'cards list-view'

    // set the buttons
    CardsViewButton.className = ''
    ListViewButton.className = 'activated'
}

CardsViewButton.addEventListener('click', activate_cards_view)
ListViewButton.addEventListener('click', activate_list_view)



/* run on load */
fetchCards()