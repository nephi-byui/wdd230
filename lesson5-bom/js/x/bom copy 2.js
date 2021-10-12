const userInput = document.getElementById("input");
const addChapter = document.getElementById("button");
const chapterList = document.getElementById("list");

addChapter.addEventListener("click", function(e) {
    e.preventDefault();
    
    userInput.value = "Hello World!"
   
    user_input = userInput.value;

    var ul = chapterList;
    var li = document.createElement("li");

    //document.getElementById("page-title",this.innerHTML='red')
    li.innerHTML = user_input;

    document.getElementById("list").appendChild(li)
    //li.appendChild(ul); 
    //ul_element.appendChild(new_li);
}) 


