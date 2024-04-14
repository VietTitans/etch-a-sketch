
const body = document.body;
let gridContainer = document.createElement("div");

let userInput = getUserInput();
setGridButton();
createGrid();
body.append(gridContainer);

//Attributes for container
gridContainer.className = "gridContainer";
gridContainer.style.outline = "10px";
gridContainer.style.outlineColor = "blue";
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";
gridContainer.style.height = userInput + "em";
gridContainer.style.width = userInput + "em";

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
        gridContainer.append(squares);
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
    btnContainer.addEventListener("click", updateGrid_)
}

function updateGrid_(){
    removeGrid_();
    
    //TODO DRY. Refactor this
    // let userInput = getUserInput();
    // setGridButton();
    // createGrid();
    // body.append(gridContainer); //Grid div
}

function removeGrid_(){
    //TODO: Implement remove button and squares
    const squares = gridContainer.querySelectorAll("squares")
    const button = body.querySelector("button");
    gridContainer = gridContainer.querySelector("gridContainer");
    
    button.remove();

    squares.forEach(gridContainer => {
        gridContainer.classList.remove("squares");
    });
}