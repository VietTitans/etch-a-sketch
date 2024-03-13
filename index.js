const body = document.body;
const div = document.createElement("div");

body.append(div);

//Parent div
div.style.outline = "1px";
div.style.outlineColor = "blue";
div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.justifyContent = "center";
div.style.height = "120px";
div.style.width = "200px";

//Child div
createGrid();

function createGrid(){
    for (let i = 0; i < 16 * 16; i++){
        let square = document.createElement("div");
        square.style.width = "16px";
        square.style.height = "16px";
        square.style.outline = "1px dotted lightblue"; //Remove after completion
        div.append(square);
    }
}