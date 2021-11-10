const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++ ) {
            
            // create card
            let card = document.createElement('section');

            // headline
            let h2 = document.createElement('h2');
            h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
            card.appendChild(h2);

            // birthdate
            let birthdate = document.createElement('p');
            birthdate.innerHTML = `Date of Birth: ${prophets[i].birthdate}`;
            card.appendChild(birthdate);

            // birthplace
            let birthplace = document.createElement('p');
            birthplace.innerHTML = `Place of Birth: ${prophets[i].birthplace}`;
            card.appendChild(birthplace);

            // image
            let photo = document.createElement('img');
            photo.src = `${prophets[i].imageurl}`;
            photo.alt = `${prophets[i].name} ${prophets[i].lastname} - ${i+1}`
            card.appendChild(photo);

            // add card to div
            document.querySelector('div.cards').appendChild(card);

        }
    }
    )
;

