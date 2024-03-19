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

function createGrid(){
    for (let i = 0; i < 16 * 16; i++){
        let square = document.createElement("divs");
        square.style.width = "16px";
        square.style.height = "16px";
        square.style.outline = "1px dotted lightblue";
        div.append(square);
    }
}

body.append(div);