export const home = {
    render: (parent) => {
        const container = document.createElement('div');
        container.className = 'container';
        parent.appendChild(container);

        const content = document.createElement('div');
        container.appendChild(content);

        const span1 = document.createElement('span');
        span1.className = 'blur';
        const span2 = document.createElement('span');
        span2.className = 'blur';
        content.appendChild(span1);
        content.appendChild(span2);

        const header = document.createElement('h1');
        header.innerHTML = "Hi! I'm Nick!";
        content.appendChild(header);

        const aboutContainer = document.createElement('div');
        aboutContainer.className = 'aboutContainer';
        content.appendChild(aboutContainer);

        const about = document.createElement('h4');
        const text = document.createElement('h4');
        text.className = 'domText';
        about.innerHTML = "And I'm ";
        aboutContainer.appendChild(about);
        aboutContainer.appendChild(text);

        const details = document.createElement('p');
        details.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis accusantium dolorem, exercitationem natus illum molestias.';
        content.appendChild(details);

        const button = document.createElement('button');
        button.innerHTML = 'View Projects >';
        content.appendChild(button);

        const img = document.createElement('img');
        img.src = 'imgs/hero-removebg.png';
        container.appendChild(img);

        setTimeout(() => {
            
            let up = true;
            let showCareer = true;
            container.classList.add('show');

            const imgInterval = setInterval(() => {
                up = !up;
                up ? img.className = 'up' : img.className = 'down';
            }, 1000);

            let career = 'an aspiring Full Stack Developer';
            let college = 'a 1st year College Student';

            typeToScreen(career);

            const textInterval = setInterval(() => {
                let i = 0;
                let whatToShow = '';
                showCareer = !showCareer;
                showCareer ? whatToShow = career : whatToShow = college;

                typeToScreen(whatToShow);
            }, 7500);

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
        }, 50)
    },
}