
const body = document.body;
const div = document.createElement("div");

let userInput = getUserInput();


//Container for squares
div.style.outline = "10px";
div.style.outlineColor = "blue";
div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.height = userInput + "em";
div.style.width = userInput + "em";


createGrid();
setGridButton();
body.append(div); //Grid div

function getUserInput(){
    let userInput;
    while(isInLimit_){
        userInput = prompt("Please enter number (1-100) of squares per side ");
        if(!isNaN(userInput) && isInLimit_) {
            break;
        } else {
            alert("Invalid input. Please enter a number.");
        }
    }
    return userInput = parseInt(userInput);
}

function isInLimit_(){
    isInLimit_ = true;
    let minLimit = 1;
    let maxLimit = 100;
    return userInput >= minLimit || userInput <= maxLimit;
}

function createGrid(){
    //  userInput = getUserInput();

    for (let i = 0; i < userInput * userInput; i++){
        let squares = document.createElement("div");
        squares.className = "square";
        squares.style.width = "16px";
        squares.style.height = "16px";
        squares.style.outline = "1px dotted lightblue";
        squares.addEventListener("mouseout", _);
        squares.addEventListener("mouseover", applyHoverEffect_);
        div.append(squares);
    }
}

//Hover effect for grid
let squares = document.querySelectorAll(".squares");
squares.forEach(squares => {
    squares.addEventListener("mouseover", applyHoverEffect_);
    squares.addEventListener("mouseout", removeHoverEffect_);
});

function applyHoverEffect_(){
    this.style.backgroundColor = "lightblue"; 
}

function _(){
    this.style.backgroundColor = "";
}

function setGridButton(){
    //Create button container
    const btnContainer = document.createElement("div");
    btnContainer.style.display = "flex";
    btnContainer.style.alignItems = "center";
    // btnContainer.style.justifyContent = "center";
    btnContainer.style.marginTop = "10px";
    btnContainer.style.marginBottom = "10px";
    document.body.append(btnContainer);

    //Create button element
    const button = document.createElement("button");
    button.textContent = "New grid";
    btnContainer.appendChild(button);
}

//TODO: Figure how to check probably

// function removeGrid(){
//     //To do: Remove grid by using something like: gridContainer.parentNode.removeChild(gridContainer);
//     for (let i = 0; i < 16 * 16; i++){
//         let squares = document.createElement("div");
//         div.append(squares);
//     }
// }
