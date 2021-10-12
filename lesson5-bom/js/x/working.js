const userInput = document.getElementById("input");
const addChapter = document.getElementById("button");
const chapterList = document.getElementById("list");

addChapter.addEventListener("click", function(e) {
    e.preventDefault();
    
    // userInput.value = "Hello World!"
   
    let user_input = userInput.value;

    const ul = chapterList;
    
    // a.   create an li element
    const li = document.createElement("li");
    const text = document.createElement('span');

    // b.   create a delete button
    const deleteButton = document.createElement('button');
    
    // c.   populate the li elements textContent or innerHTML with the input
    li.appendChild(text);
    text.textContent = user_input;

    // d.   populate the button textContent with an ❌
    deleteButton.innerHTML = "&#10060;";

    // e.   append the li element with the delete button
    li.appendChild(deleteButton);

    // f.   append the list element with the li element just created
    //      and appended with text and the delete button
    ul.appendChild(li);

    // g.   add an event listener to the delete button that removes the li element when clicked
    deleteButton.onclick = function(e) {
      list.removeChild(li);
    }

    // h.   send the focus to the input element
    input.focus();

    // i.   clear the text box
    userInput.value = "";
}) 


