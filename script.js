// Declare your arrays here

// Make sure to declare your HTML elements as variables! 
let genreMap = {
    "action": [
        "Die Hard",
        "The Dark Knight",
        "Mad Max: Fury Road"
    ],
    "comedy": [
        "Superbad",
        "The Hangover",
        "Anchorman: The Legend of Ron Burgundy"
    ],
    "drama": [
        "The Shawshank Redemption",
        "Pulp Fiction",
        "Forrest Gump"
    ],
};




// Submit Button 
let submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", function () {
    let userInput = document.querySelector(".input").value;
    userInput = userInput.toLowerCase().trim();

    let movieDiv = document.querySelector(".movies");
    movieDiv.innerHTML = "";
    let movieArray = genreMap[userInput];
    movieArray.forEach(name => {
        movieDiv.appendChild(getElement(name));
    });
});

function getElement(movieName) {
    let newElement = document.createElement("div");

    let title = document.createElement("p");
    let text = document.createTextNode(movieName);
    title.append(text);
    newElement.append(title);

    
    return newElement;
}