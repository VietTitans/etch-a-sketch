const body = document.body;
const div = document.createElement("div");

//Container for squares
div.style.outline = "10px";
div.style.outlineColor = "blue";
div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.height = "16em";
div.style.width = "16em";

//squares
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