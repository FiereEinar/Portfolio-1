import { observer } from '../js/observer.js';

const text = document.querySelector('.domText');
const main = document.querySelector('.main > .container > div');
const mainImg = document.querySelector('.main > .container > img');
const nav = document.querySelector('.navBar');
const imgsContainer = document.querySelector('.imgsContainer');
const details = document.querySelector('.details');

observer.observe(main);
observer.observe(mainImg);
observer.observe(nav);
observer.observe(imgsContainer);
observer.observe(details);

// const navButton = document.querySelector('.navButton');
// const ul = document.querySelector('.navBar > ul');

// navButton.addEventListener('click', () => {
// 	ul.classList.toggle('showUL');
// });

const leftCards = document.querySelectorAll('.cardContainer > .left');
const rightCards = document.querySelectorAll('.cardContainer > .right');

leftCards.forEach((card) => observer.observe(card));
rightCards.forEach((card) => observer.observe(card));


setTimeout(() => {
	let textSwitch = false;
	let word;

	typeToScreen('a 1st year College Student');

	const textInterval = setInterval(() => {
		textSwitch = !textSwitch;
		textSwitch ?
			word = 'an aspiring Full Stack Developer' :
			word = 'a 1st year College Student';

		typeToScreen(word);
	}, 7500);
}, 500);

function typeToScreen(word) {
	let i = 0;
	let textTemp = '';
	const typeInterval = setInterval(() => {
		textTemp += word[i];
		text.innerHTML = textTemp + '|';
		i++;
		if (i == word.length) {
			setTimeout(() => {
				clearText(word);
			}, 800);
			clearInterval(typeInterval);
		}
	}, 100);
}

function clearText(text) {
	const domText = document.querySelector('.domText');

	let word = text
	const clearTextInterval = setInterval(() => {
		word = word.slice(0, -1);
		domText.innerHTML = word + '|';
		if (word.length == 0) {
			clearInterval(clearTextInterval);
		}
	}, 100);
}