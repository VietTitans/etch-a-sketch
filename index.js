
const body = document.body;
const div = document.createElement("div");

let userInput = getUserInput();
setGridButton();
createGrid();
body.append(div); //Grid div

//Container for squares
div.style.outline = "10px";
div.style.outlineColor = "blue";
div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.height = userInput + "em";
div.style.width = userInput + "em";

function getUserInput(){
    let userInput;
    while (true){
        userInput = prompt("Please enter number (1-100) of squares per side ");

        if(userInput !== null && !isNaN(userInput) && userInput >= 1 && userInput <= 100){
            break;
        }
    }
    return userInput;
}

function createGrid(){
    for (let i = 0; i < userInput * userInput; i++){
        let squares = document.createElement("div");
        squares.className = "square";
        squares.style.width = "16px";
        squares.style.height = "16px";
        squares.style.outline = "1px dotted lightblue";
        squares.addEventListener("mouseover", applyHoverEffect_);
        squares.addEventListener("mouseout", removeHoverEffect_);
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

function removeHoverEffect_(){
    this.style.backgroundColor = "";
}

function setGridButton(){
    //Button container
    const btnContainer = document.createElement("div");
    btnContainer.style.display = "flex";
    btnContainer.style.alignItems = "center";
    // btnContainer.style.justifyContent = "center";
    btnContainer.style.marginTop = "10px";
    btnContainer.style.marginBottom = "10px";
    document.body.append(btnContainer);

    //Button element
    const button = document.createElement("button");
    button.textContent = "New grid";
    btnContainer.appendChild(button);
    btnContainer.addEventListener("click", updateGrid)
}

function updateGrid(){
    removeGrid_();
    createGrid();

    //TODO repetition. Refactor this
    let userInput = getUserInput();
    setGridButton();
    createGrid();
    body.append(div); //Grid div
}

//TODO: Implement remove button and squares
function removeGrid_(){
    // let gridContainer = squares.remove("div");

    // while (gridContainer.firstChild){
        // gridContainer.removeChild(gridContainer.firstChild);
    // }
}