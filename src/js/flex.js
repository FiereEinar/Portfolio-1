import { observer } from '../js/observer.js';

const nav = document.querySelector('.navBar');
const mainImg = document.querySelector('.main > .container > img');
const main = document.querySelector('.main > .container > div');
const leftCards = document.querySelectorAll('.cardContainer > .left');
const rightCards = document.querySelectorAll('.cardContainer > .right');
const videos = document.querySelectorAll('.videoContainer video');

observer.observe(nav);
observer.observe(main);
observer.observe(mainImg);
leftCards.forEach((card) => observer.observe(card));
rightCards.forEach((card) => observer.observe(card));
videos.forEach((video) => observer.observe(video));

const navButton = document.querySelector('.navButton');
const ul = document.querySelector('.navBar > ul');

navButton.addEventListener('click', () => {
	ul.classList.toggle('showUL');
});