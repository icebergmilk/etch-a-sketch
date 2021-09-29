function hover(element) {
    element.target.classList.add('draw');
}

function creatGrid() {
    const container = document.querySelector('#container');
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            grid.addEventListener('mouseover', (e) => {
                hover(e);
            });
            container.appendChild(grid);
        }
    }
}

function clear() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach((grid) => {
        grid.classList.remove('draw');
    });
}

creatGrid();

document.querySelector('#clear').addEventListener('click', () => {
    clear();
});
