const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const button = document.querySelector('button');


button.addEventListener('click', (e) => {
    e.preventDefault();

    calcular();
});

function calcular(){
    const soma1 = parseFloat(input1.value);
    const soma2 = parseFloat(input2.value);

    const somar = (soma1 + soma2) / 2;

    const valor = document.querySelector('#valor');
    valor.textContent = somar;

};