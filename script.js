const sketchBox = document.getElementById("sketchBox");
const gridSizeInput = document.getElementById("gridSizeInput");
const resetBtn = document.getElementById("resetBtn");

function fillSketchBox(gridSize) {

    sketchBox.innerHTML = '';

    let squareSize = 500 / gridSize

    const gridSizeSquared = gridSize * gridSize;

    for (i = 0; i < gridSizeSquared; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList = "square";

        sketchBox.appendChild(gridSquare);

        gridSquare.style.width = `${squareSize}px`
        gridSquare.style.width = `${squareSize}px`
        gridSquare.style.boxSizing = "border-box"
        gridSquare.style.border = "black solid 1px"
    }
}

resetBtn.addEventListener("click", () => {
    let gridSize = parseInt(gridSizeInput.value);

    if (gridSize <= 100 && 4 <= gridSize) {
        fillSketchBox(gridSize);
    }   else {
        return console.log("Please enter a value between 4 and 100");
    }
})



fillSketchBox(16)