const sketchBox = document.getElementById("sketchBox");
const gridSizeInput = document.getElementById("gridSizeInput");
const resetBtn = document.getElementById("resetBtn");
const colourInput = document.getElementById("color");

let isDrawing = false;

document.addEventListener("mousedown", () => {
    isDrawing = true;
});

document.addEventListener("mouseup", () => {
    isDrawing = false;
});

function fillSketchBox(gridSize) {

    sketchBox.innerHTML = '';

    let squareSize = 500 / gridSize;

    const gridSizeSquared = gridSize * gridSize;

    for (let i = 0; i < gridSizeSquared; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList = "square";

        sketchBox.appendChild(gridSquare);
        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.height = `${squareSize}px`;
        gridSquare.style.boxSizing = "border-box";

        /*gridSquare.addEventListener("mouseenter", () => {
            gridSquare.style.backgroundColor = "rgb(237, 237, 237)";
        })

        gridSquare.addEventListener("mouseleave", () => {
            gridSquare.style.backgroundColor = "white";
        })*/

        function colorSquare() {
            let currColor = colourInput.value;
            gridSquare.style.backgroundColor = currColor;
        }
        
        gridSquare.addEventListener("mouseover", () => {
            if (isDrawing === true) {
                colorSquare();
                preventDefault();
            }
        });

        gridSquare.addEventListener("click", () => {

            colorSquare();
            preventDefault();
        });
    }
};

resetBtn.addEventListener("click", () => {
    gridSize = parseInt(gridSizeInput.value) || 16;

    if (gridSize <= 100 && 4 <= gridSize) {
        fillSketchBox(gridSize);
    }   else {
        return console.log("Please enter a value between 4 and 100");
    }
});

fillSketchBox(16);





