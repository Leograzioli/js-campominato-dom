const wrapper = document.querySelector(".wrapper");
const playButton = document.querySelector(".play-button");
const levelSelectHtml = document.getElementById("game-level");

playButton.addEventListener("click", startGame)


//FUNCTIONS

//clear the innerhtml and console, show the game window in base of choosen level
function startGame (){
    console.clear();
    wrapper.innerHTML = "";
    wrapper.classList.add("active");
    const level = parseInt(levelSelectHtml.value);   
    generateElement(level);
}

//based on the user choice set the level of the game
//level -> (number) number given by the level choice
//return -> (string)
function levelSelector(level) {
    let selected = "";
    if (level === 100) {
       selected = "easy";
    } else if (level === 81) {
       selected = "normal";
    } else if (level === 49) {
        selected = "hard";
    }
    return selected 
}

//create a square element to add on DOM
//number -> (number) the number to set inside of the square element
//levelChoice -> (number) number given by the level choice
//return -> (object) the square element
function createSquare (number, levelChoice) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add(levelSelector(levelChoice))
    square.innerHTML = (number);
    return square;
}

//add square with a number inside
//levelChoice -> (number) number given by the level choice
function generateElement (levelChoice) {
    for (let i = 1; i < (levelChoice + 1); i++) {
        const element = [i];
        const theSquare = createSquare(element, levelChoice);
        theSquare.addEventListener("click", onSquareClick)
        wrapper.append(theSquare); 
    }
}

//on clic add class blue to element
function onSquareClick() {
    this.classList.add("blue");
    console.log(this.textContent);
}