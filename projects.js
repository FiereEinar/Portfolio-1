class Project {
    constructor() {
        this.name = name;
        this.description = description;
        // this.s
    }
}

export const projects = {
    render: (parent) => {
        const container = document.createElement('div');
        parent.appendChild(container);

        const hello = document.createElement('h1');
        hello.innerHTML = 'HELLO';
        container.appendChild(hello);
    },
}