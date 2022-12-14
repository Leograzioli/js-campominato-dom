const wrapper = document.querySelector(".wrapper");
const playButton = document.querySelector(".play-button");
const levelSelectHtml = document.getElementById("game-level");
const bombsNum = 16;

let bombNumbers = [];
let clickedSquares = [];
let canPlay = true;

playButton.addEventListener("click", function(){
    const level = parseInt(levelSelectHtml.value);
    startGame(level)
})

//clear the innerhtml and console, show the game window in base of choosen level
function startGame (level){
    bombNumbers = [];
    clickedSquares = [];
    canPlay = true;
    // console.clear();
    wrapper.innerHTML = "";
    wrapper.classList.add("active");  
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
function createSquare (number, levelChoice,) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add(levelSelector(levelChoice));
    square.innerHTML = (number);
    return square;
}

//add square with a number inside
//levelChoice -> (number) number given by the level choice
function generateElement (levelChoice) {
    for (let i = 1; i < (levelChoice + 1); i++) {
        const element = (i);
        const theSquare = createSquare(element, levelChoice, i);
        theSquare.addEventListener("click", function () {  
            if (canPlay){
                onSquareClick(levelChoice, theSquare);
            }             
        })
        theSquare.setAttribute("id", i);
        wrapper.append(theSquare);
    }

    while (bombNumbers.length < bombsNum) {
        let rdnNum = rndNumber(1, levelChoice);
        if (!bombNumbers.includes(rdnNum)) {
        bombNumbers.push(rdnNum);
        }
    }
}

//generate a random number between min and max parameters 
//min -> (number) the min number to generate
//max -> (number) the biggest number to generate
//return -> (number)
function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//on clic add class blue to element
function onSquareClick(level, square) {
    let thisClick = parseInt(square.textContent);
    
    if (bombNumbers.includes(thisClick)){
        canPlay = false;
        square.classList.add("red")
        for (let i = 0; i < bombNumbers.length; i++) {
            let bombBox = document.getElementById(bombNumbers[i]);
            bombBox.classList.add("red"); 
        }
        alert("hai perso") 
        
    } else {
        square.classList.add("blue");
        console.log((clickedSquares.length + 1));
        
        if(!clickedSquares.includes(thisClick)){
            clickedSquares.push(thisClick);
        }
        
        if ((level - bombsNum) === clickedSquares.length){
            alert ("hai vinto");
        }
    } 
}