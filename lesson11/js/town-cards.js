const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        
        const towns = jsonObject['towns'];

        //document.querySelector('div.cards').innerHTML = "";
        document.querySelector('div.cards').innerHTML = "<!-- Start JSON data import -->";

        const StormwatchBayTowns = [ 'Preston', 'Soda Springs', 'Fish Haven']

        for (let i = 0; i < towns.length; i++ ) {

            if ( StormwatchBayTowns.includes(towns[i].name) ) {
            
            // create card
            let card = document.createElement('section');

            // div.text-portion
            let div = document.createElement('div');
            div.className = "text-wrapper"

            // name
            let h2 = document.createElement('h2');
            h2.textContent = `${towns[i].name}`;
            div.appendChild(h2);

            let motto = document.createElement('h3');
            motto.className = "motto"
            motto.innerHTML = `${towns[i].motto}`;
            div.appendChild(motto);

            // year founded
            let yearFounded = document.createElement('p');
            yearFounded.className = "year-founded"
            yearFounded.innerHTML = `Year Founded: ${towns[i].yearFounded}`;
            div.appendChild(yearFounded);

            // population
            let currentPopulation = document.createElement('p');
            currentPopulation.className = "current-population"
            currentPopulation.innerHTML = `Population: ${towns[i].currentPopulation}`;
            div.appendChild(currentPopulation);

            // annual rainfall
            let averageRainfall = document.createElement('p');
            averageRainfall.className = "average-rainfall"
            averageRainfall.innerHTML = `Annual Rainfall: ${towns[i].averageRainfall}`;
            div.appendChild(averageRainfall);

            // add div.text-portion to section
            card.appendChild(div);

            // div.text-portion
            let divImgWrapper = document.createElement('div');
            divImgWrapper.className = "img-wrapper"

            // picture
            let photo = document.createElement('img');
            photo.src = `images/towns/${towns[i].photo}`
            photo.alt = `${towns[i].name}`
            photo.setAttribute("height", "300")
            photo.setAttribute("width", "300")
            divImgWrapper.appendChild(photo);

            // add div.img-wrapper to section
            card.appendChild(divImgWrapper);

            // add card to div
            document.querySelector('div.cards').appendChild(card);

            }

        }

    document.querySelector('div.cards').innerHTML += "<!-- End JSON data import -->";
    }
    )
;

