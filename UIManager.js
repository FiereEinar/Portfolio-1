import { home } from "./home.js"
import { projects } from "./projects.js";

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

// init();

function init() {
    home.render(parent);
}

function clickHandler(btn) {
    switch(btn.id) {
        case 'home':
            handler(btn);
            home.render(parent);
            break;
        case 'projects':
            handler(btn);
            projects.render(parent);
            break;
    }
    function handler(btn) {
        clearScreen();
        navButtons.forEach((button) => {
            button.classList.remove('selected');
        });
        btn.classList.add('selected');
    }
}