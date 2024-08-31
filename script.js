//get refs to sketch area and container element
const container = document.getElementById('container');
const sketchArea = document.getElementById('sketchArea');
const resetButton = document.getElementById('resetButton');

createGrid(4);

resetButton.onclick = reloadGrid;

function createGrid(sideLength) {

    sketchArea.style.width = '760px';
    sketchArea.style.height = '760px';

    let pixelSize = parseInt(sketchArea.style.width) / sideLength;

    for (let i = 0; i < sideLength * sideLength; i++){

        let newPixel = document.createElement('div')
        newPixel.classList.add('pixel');
        newPixel.style.height = `${pixelSize}px`;
        newPixel.style.width = `${pixelSize}px`;
        newPixel.addEventListener('mouseleave', (event) => {
            event.target.style.backgroundColor = 'black';
        })
        sketchArea.appendChild(newPixel);

    }
}

function removeGrid() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}


function reloadGrid() {

    let sideLength = prompt('enter a number (N for NxN grid)');

    if (sideLength <= 100 && sideLength >= 1) {
        removeGrid();
        createGrid(sideLength);
    } else {
        sideLength = prompt('enter an integer less than 101');
        removeGrid();
        createGrid(sideLength);
    }

}