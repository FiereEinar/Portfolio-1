import { observer } from "../js/observer.js";

const nav = document.querySelector('.navBar');
const pe = document.querySelector('.pe');
const tree = document.querySelector('.tree');
const blogIntro = document.querySelector('.blogIntro');
const left = document.querySelectorAll('.lessonsContainer > div > .left');
const right = document.querySelectorAll('.lessonsContainer > div > .right');

observer.observe(nav);
observer.observe(pe);
observer.observe(tree);
observer.observe(blogIntro);
left.forEach(card => observer.observe(card));
right.forEach(card => observer.observe(card));

const navButton = document.querySelector('.navButton');
const ul = document.querySelector('.navBar > ul');

navButton.addEventListener('click', () => {
	ul.classList.toggle('showUL');
});