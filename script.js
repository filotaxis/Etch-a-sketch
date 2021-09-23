const gridContainer = document.querySelector(".grid-container");
const buttonGray = document.querySelector(".gray-c");
const buttonRandom = document.querySelector(".random-c");
const erase = document.querySelector(".clear-all");
const gridRes = document.querySelector(".grid-res");

let color = "gray";
// let gridSize = 

function paintBlack() {
    this.style["background-color"] = "gray";
}

function paintRandom() {
    // hsl color mode to create just 1 var
    let hue = Math.floor(Math.random()*360)+1;
    this.style["background-color"] = `hsl(${hue}, 60%, 50%`;
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

function gridSize(state) {
    switch (state) {
        case 0:
            console.log("0");
            break;
        case 1:
            console.log("1");
            break;
        case 2:
            console.log("2");
            break;
    }
}

let state = 0;
erase.addEventListener("click", clearAll);
buttonGray.addEventListener("click", () => color = "gray");
buttonRandom.addEventListener("click", () => color = "random");
gridRes.addEventListener("click", () => {
    if (state >= 2) {
        state = 0
    } else {
        state++;
    }
    gridSize(state);
});

function createGrid(size) {
    for (let i = 0; i < size; i++){
        const divElem = document.createElement("div");
        divElem.classList.add("element");
        gridContainer.appendChild(divElem);
    }
    let grid = gridContainer.querySelectorAll(".element");
    grid.forEach(pixel => pixel.addEventListener("mouseover", paint));
}
    
createGrid(256);

