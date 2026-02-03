const sketchBox = document.getElementById("sketchBox")
let gridSize = document.getElementById("gridSizeInput").value;

console.log(gridSize)

function fillSketchBox(gridSize) {

    sketchBox.innerHTML = '';

    const gridSizeSquared = gridSize * gridSize;

    for (i = 0; i < gridSizeSquared; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList = "square";

        sketchBox.appendChild(gridSquare);

        gridSquare.style.width = `calc(100% / ${gridSize})`;
        gridSquare.style.height = `calc(100% / ${gridSize})`;
    }
}

fillSketchBox(gridSize)