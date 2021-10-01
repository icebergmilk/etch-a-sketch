const CONTAINER_SIZE = 320;

function hover(element) {
    element.target.classList.add('draw');
}

function createGrid(gridSize = 16) {
    console.log(`GRID SIZE: ${gridSize}`);
    const container = document.querySelector('#container');
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style.width = `${CONTAINER_SIZE / gridSize}px`;
            grid.style.height = `${CONTAINER_SIZE / gridSize}px`;
            grid.addEventListener('mouseover', (e) => {
                hover(e);
            });
            container.appendChild(grid);
        }
    }
}

function createNewGrid() {
    const newSize = parseInt(prompt('Squares per side? '));
    if (!newSize) {
        createGrid();
    } else {
        createGrid(newSize);
    }
}

function clear() {
    const container = document.querySelector('#container');
    while(container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    createNewGrid();
}

createGrid();

document.querySelector('#clear').addEventListener('click', () => {
    clear();
});
