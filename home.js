const img = document.querySelector('.container > img');
const text = document.querySelector('.container > div > .aboutContainer > .domText');

setTimeout(() => {
    let up = true;
    let showCareer = false;
    let whatToShow;

    const imgInterval = setInterval(() => {
        up = !up;
        up ? img.className = 'up' : img.className = 'down';
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

    function typeToScreen(word) {
        let i = 0;
        const typeInterval = setInterval(() => {
            text.innerHTML += word[i];
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
            domText.innerHTML = word;
            if (word.length == 0) {
                clearInterval(clearTextInterval);
            }
        }, 100);
    }
}, 50);