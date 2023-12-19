import { observer } from '../js/observer.js';

const img = document.querySelector('.container > img');
const mainContainer = document.querySelector('.container');
const text = document.querySelector('.domText');
const main = document.querySelector('.main > .container > div');
const mainImg = document.querySelector('.main > .container > img');
const nav = document.querySelector('.navBar');
const leftCards = document.querySelectorAll('.cardContainer > .left');
const rightCards = document.querySelectorAll('.cardContainer > .right');
const imgsContainer = document.querySelector('.imgsContainer');
const details = document.querySelector('.details');
const contact = document.querySelector('.contact');


// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

observer.observe(main);
observer.observe(mainContainer);
observer.observe(mainImg);
observer.observe(nav);
observer.observe(imgsContainer);
observer.observe(details);
observer.observe(contact);
leftCards.forEach((card) => observer.observe(card));
rightCards.forEach((card) => observer.observe(card));


const navButton = document.querySelector('.navButton');
const ul = document.querySelector('.navBar > ul');

navButton.addEventListener('click', () => {
	ul.classList.toggle('showUL');
});


setTimeout(() => {
    let textSwitch = false;
    let word;

    typeToScreen('a 1st year College Student');

    const textInterval = setInterval(() => {
        let i = 0;
        
        textSwitch = !textSwitch;
        textSwitch 
        ? word = 'an aspiring Full Stack Developer' 
        : word = 'a 1st year College Student';

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
