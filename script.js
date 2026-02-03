const sketchBox = document.getElementById("sketchBox");
const gridSizeInput = document.getElementById("gridSizeInput");
const resetBtn = document.getElementById("resetBtn");

function fillSketchBox(gridSize) {

    sketchBox.innerHTML = '';

    const gridSizeSquared = gridSize * gridSize;

    for (i = 0; i < gridSizeSquared; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList = "square";

        sketchBox.appendChild(gridSquare);

        gridSquare.style.width =
        gridSquare.style.height =
        gridSquare.style.backgroundColor = "green";
    }
}

resetBtn.addEventListener("click", () => {
    let gridSize = parseInt(gridSizeInput.value);

    if (gridSize <= 32 && 4 <= gridSize) {
        fillSketchBox(gridSize);
    }   else {
        return console.log("Please enter a value between 4 and 100");
    }
})



fillSketchBox(16)