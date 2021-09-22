const gridContainer = document.querySelector(".grid-container");

function changeColor() {
    this.style["background-color"] = "gray";
}


function createGrid(size) {
    for (let j = 0; j < size; j++){
        const divRow = document.createElement("div");
        divRow.classList.add("row");
        2
        for (let i = 0; i < size; i++){
            const divElem = document.createElement("div");
            divElem.classList.add("element");
            divElem.addEventListener("mouseover", changeColor);
            divRow.appendChild(divElem);
        }
        
        gridContainer.appendChild(divRow);
    }
    
}

createGrid(16);

