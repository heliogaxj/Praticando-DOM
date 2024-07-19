const card = document.querySelector('.card');

const lista_frutas = Array();

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

for(let i = 0; i < lista_frutas.length; i++){
    card.innerHTML += (`${lista_frutas[i]} <br />`);
}