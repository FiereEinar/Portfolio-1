import { home } from "./home.js"

const navButtons = document.querySelectorAll('nav ul > li');
const parent = document.querySelector('.main');

navButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        clickHandler(btn)
    });
});

function clearScreen() {
    let prev = parent.querySelectorAll('div');
    prev.forEach((itm) => {
        itm.remove();
    });
}

init();

function init() {
    home.render(parent);
}

function addSelected(item) {
    item.classList.add('selected');
}

function removeActiveClass() {
    navButtons.forEach((btn) => {
        btn.classList.remove('active');
    });
}

function clickHandler(btn) {
    switch(btn.id) {
        case 'home':
            clearScreen();
            removeActiveClass();
            home.render(parent);
            break;
    }
}