import { observer } from "../js/observer.js";

const nav = document.querySelector('.navBar');
const pe = document.querySelector('.pe');
const tree = document.querySelector('.tree');

observer.observe(nav);
observer.observe(pe);
observer.observe(tree);

const navButton = document.querySelector('.navButton');
const ul = document.querySelector('.navBar > ul');

navButton.addEventListener('click', () => {
	ul.classList.toggle('showUL');
});