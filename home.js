const img = document.querySelector('.container > img');
const text = document.querySelector('.container > div > .aboutContainer > .domText');
const main = document.querySelector('.main > .container > div');
const mainImg = document.querySelector('.main > .container > img');
const nav = document.querySelector('.navBar');
const leftCards = document.querySelectorAll('.cardContainer > .left');
const rightCards = document.querySelectorAll('.cardContainer > .right');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

observer.observe(main);
observer.observe(mainImg);
observer.observe(nav);
leftCards.forEach((card) => {
    observer.observe(card);
});
rightCards.forEach((card) => {
    observer.observe(card);
});

setTimeout(() => {
    let up = true;
    let showCareer = false;
    let whatToShow;

    const imgInterval = setInterval(() => {
        up = !up;
        up ? img.id = 'up' : img.id = 'down';
    }, 1000);

    typeToScreen('a 1st year College Student');

    const textInterval = setInterval(() => {
        let i = 0;
        
        showCareer = !showCareer;
        showCareer 
        ? whatToShow = 'an aspiring Full Stack Developer' 
        : whatToShow = 'a 1st year College Student';

        typeToScreen(whatToShow);
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
