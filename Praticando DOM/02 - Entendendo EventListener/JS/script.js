let container = document.getElementsByClassName('container')[0];
const button = document.getElementById('btn');


button.addEventListener('click', () => {
    const newElement = document.createElement('p');
    const text = document.createTextNode('Hello World');
    newElement.appendChild(text);
    container.appendChild(newElement);
});