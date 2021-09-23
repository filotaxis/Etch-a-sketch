const gridContainer = document.querySelector(".grid-container");

const buttonA = document.querySelector(".a");



function changeColor() {
    this.style["background-color"] = "gray";
}


function createGrid(size) {
    for (let i = 0; i < size; i++){
        const divElem = document.createElement("div");
        divElem.classList.add("element");
        divElem.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(divElem);
    }
}
    

createGrid(256);

