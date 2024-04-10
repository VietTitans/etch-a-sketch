const body = document.body;
const div = document.createElement("div");

//Container for squares
div.style.outline = "10px";
div.style.outlineColor = "blue";
div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.height = "16em";
div.style.width = "16em";

getUserInput();
setGridButton();
createGrid();
body.append(div);

function createGrid(){
    for (let i = 0; i < 16 * 16; i++){
        let squares = document.createElement("div");
        squares.className = "square";
        squares.style.width = "16px";
        squares.style.height = "16px";
        squares.style.outline = "1px dotted lightblue";
        squares.addEventListener("mouseout", removeHoverEffect);
        squares.addEventListener("mouseover", applyHoverEffect);
        div.append(squares);
    }
}

//Hover effect for grid
let squares = document.querySelectorAll(".squares");
squares.forEach(squares => {
    squares.addEventListener("mouseover", applyHoverEffect);
    squares.addEventListener("mouseout", removeHoverEffect);
});

function applyHoverEffect(){
    this.style.backgroundColor = "lightblue"; 
}

function removeHoverEffect(){
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

function getUserInput(){
    let userInput = prompt("Please enter number (1-100) of squares per side");
    let inputNumber = parseInt(userInput);

    while (!isInLimit){
        alert("Invalid input. Please enter a valid number");
    } 
    removeGrid();
    console.log("Hello World")
}

//TODO: Figure how to check probably

// function removeGrid(){
//     //To do: Remove grid by using something like: gridContainer.parentNode.removeChild(gridContainer);
//     for (let i = 0; i < 16 * 16; i++){
//         let squares = document.createElement("div");
//         div.append(squares);
//     }
// }

function isInLimit(inputNumber){
    let minLimit = 1;
    let maxLimit = 100;

    return inputNumber >= minLimit && inputNumber <= maxLimit;
}
