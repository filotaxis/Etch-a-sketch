const gridContainer = document.querySelector(".grid-container");
const buttonGray = document.querySelector(".gray-c");
const buttonRandom = document.querySelector(".random-c");
const erase = document.querySelector(".clear-all");
const gridRes = document.querySelector(".grid-res");

function createGrid(size) {
    for (let i = 0; i < size; i++){
        const divElem = document.createElement("div");
        divElem.classList.add("element");
        divElem.style["width"] = `calc(100%/${gridSize})`;
        divElem.style["height"] = `calc(100%/${gridSize})`;
        gridContainer.appendChild(divElem);
    }
    let grid = gridContainer.querySelectorAll(".element");
    grid.forEach(pixel => pixel.addEventListener("mouseover", paint));
}

function paint() {
    switch (color) {
        case "gray":
            this.style["background-color"] = "gray";
            break;
        case "random":
            let hue = Math.floor(Math.random() * 360) + 1;
            this.style["background-color"] = `hsl(${hue}, 60%, 50%`;
            break;
    }
}

function clearAll() {
    const pixels = document.querySelectorAll(".element");
    pixels.forEach(pixel => {
        pixel.style["background-color"] = "#e9d8a6";
    });
}

function setGridSize(state) {
    switch (state) {
        case 0:
            gridSize = 8;
            break;
        case 1:
            gridSize = 16;
            break;
        case 2:
            gridSize = 4;
            break;
    }
}

function setGrid() {
    if (state >= 2) {
        state = 0
    } else {
        state++;
    }
    setGridSize(state);
    newGrid();
}

function newGrid() {
    let grid = gridContainer.querySelectorAll(".element");
    grid.forEach(pixel => pixel.remove());
    createGrid(gridSize * gridSize);
}

let state = 0;
let color = "gray";
let gridSize = 8;
createGrid(gridSize**2);

erase.addEventListener("click", clearAll);
buttonGray.addEventListener("click", () => color = "gray");
buttonRandom.addEventListener("click", () => color = "random");
gridRes.addEventListener("click", setGrid);
