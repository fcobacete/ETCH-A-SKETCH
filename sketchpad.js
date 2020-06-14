//Initial constants and variables

const container = document.getElementById("gridContainer");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let allCells = document.querySelectorAll(".cell");
let size = 16;



function createGrid() {
    makeRows(size);
    makeColumns(size);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

createGrid();

function colorBlack() {
    container.addEventListener("mouseover", function(e) {
        e.target.style.background = "black";
    }, false);
}

colorBlack();