export const home = {
    render: (parent) => {
        const container = document.createElement('div');
        container.className = 'container';
        parent.appendChild(container);

        const content = document.createElement('div');
        container.appendChild(content);

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
            
            
            const textInterval = setInterval(() => {
                let i = 0;
                let whatToShow = '';
                // timer = 800;
                showCareer = !showCareer;
                showCareer ? whatToShow = career : whatToShow = college;

                const typeInterval = setInterval(() => {
                    text.innerHTML += whatToShow[i];
                    i++;
                    if (i == whatToShow.length) {
                        setTimeout(() => {
                            clearText(whatToShow);
                        }, 800);
                        clearInterval(typeInterval);
                    }
                }, 100);
            }, 7500);

            function clearText(text) {
                const domText = document.querySelector('.domText');
                let word = text
                const clearTextInterval = setInterval(() => {
                    word = word.slice(0, -1);
                    console.log(word);
                    domText.innerHTML = word;
                    if (word.length == 0) {
                        clearInterval(clearTextInterval);
                    }
                }, 100);
            }
        }, 50)
    },
}