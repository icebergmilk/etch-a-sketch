function hover(element) {
    element.target.style.backgroundColor = 'gray';
}

function creatGrid(container) {
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

const container = document.querySelector('#container');
creatGrid(container);
