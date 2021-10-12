const submitButton = document.querySelector('.submit');

menuButton.addEventListener('click', () => {mainNav.classList.toggle('visible')}, false);

function submit(userInput) {
    var ul = document.getElementsByClassName("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput)
}