const entradaInput = document.querySelector("#entrada")
const adicionarBtn = document.querySelector("#adicionarBtn");
const ordenarBtn = document.querySelector("#ordenarBtn");

const objetos = Array("cadeira", "impressora", "garfo");

adicionarBtn.addEventListener("click", function () {
    let inputTratado = entradaInput.value.toLowerCase().trim();
    entradaInput.value == '' ? alert('Informe um valor válido') : pesquisarAdicionar(inputTratado);
    
});

ordenarBtn.addEventListener('click', () => {
    console.log(objetos.sort());
});

function pesquisarAdicionar(inputTratado){
    entradaInput.value = '';
    if(objetos.indexOf(inputTratado) >= 0){
        alert("Objeto ja foi adicionado");
    }else{
        objetos.push(inputTratado)
        console.log(objetos);
    }
}
