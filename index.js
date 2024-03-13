const body = document.body;
const div = document.createElement("div");

body.append(div);
div.textContent = "Hello world";
div.style.outline = "1px";
div.style.outlineColor = "blue";
div.style.display = "flex";
div.style.flexDirection = "row";
div.style.justifyContent = "center";
div.style.alignItems = "center";
createGrid();

function createGrid(){
    for (let i = 0; i < 16 * 16; i++){
        let square = document.createElement("div");
        div.append(square);
    }
}