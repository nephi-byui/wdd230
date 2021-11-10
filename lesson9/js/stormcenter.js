function adjustRating(rating) {
    document.getElementById("severity-value").innerHTML = rating;
    descElement = document.getElementById("severity-desc")
    reportTextElement = document.querySelector(".severity-report-text")
    
    mild = ["1", "2", "3"]
    moderate = ["4", "5", "6"]
    strong = ["7","8","9"]
    biblical = ["10"]

    if (mild.includes(rating)) {
        desc = "Mild"
        color = "var(--jet-black)"
        bg = "white"
    } 
    else if (moderate.includes(rating)) {
        desc = "Moderate"
        color = "var(--jet-black)"
        bg = "skyblue"
    } 
    else if (strong.includes(rating)) {
        desc = "Strong"
        color = "#eeeeee"
        bg = "#000080"
    }
    else if (biblical.includes(rating)) {
        desc = "BIBLICAL"
        color = "#ff0e0e"
        bg = "black"
    } 

    descElement.innerHTML = desc

    reportTextElement.style["color"] = color
    reportTextElement.style["background-color"] = bg

    
    



    }