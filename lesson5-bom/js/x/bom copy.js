const userInput = document.getElementById("input");
const addChapter = document.getElementById("button");
const chapterList = document.getElementById("list");

addChapter.addEventListener("click", function(e) {
    e.preventDefault();
    
    // userInput.value = "Hello World!"
   
    let user_input = userInput.value;
    // clear the text box
    userInput.value = "";

    const ul = chapterList;
    
    const li = document.createElement("li");
    const text = document.createElement('span');
    const deleteButton = document.createElement('button');
    
    li.appendChild(text);
    text.textContent = user_input;
    li.appendChild(deleteButton);
    deleteButton.textContent = '&#10060;';
    ul.appendChild(li);

    deleteButton.onclick = function(e) {
      list.removeChild(li);
    }

    input.focus();
    //li.appendChild(ul); 
    //ul_element.appendChild(new_li);
}) 


