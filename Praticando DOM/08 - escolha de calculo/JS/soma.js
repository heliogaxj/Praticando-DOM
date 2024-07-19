const input_1 = document.querySelector('#valor-1');
const input_2 = document.querySelector('#valor-2');
const inputFilter = document.querySelectorAll('.input');
const checkbox_1 = document.getElementById('checkbox-1');
const checkbox_2 = document.querySelector('#checkbox-2');
const btn = document.querySelector('#btn');

let checkboxReturn;

inputFilter.forEach(input => {
    input.addEventListener('input', function(){
        this.value = this.value.replace(/\D/g, "");
    });
});

btn.addEventListener('click', (e)=> {
    e.preventDefault();

    checkboxReturn = verificarCheckboxMarcado(checkbox_1, checkbox_2);
    operação()
});

function verificarCheckboxMarcado(checkbox_1, checkbox_2){
    if(checkbox_1.checked){
        return true;
    }else if(checkbox_2.checked){
        return false;
    }else{
        alert('Por favor, selecione se os valores deveram ser somado ou subtraidos');
    };
};

function operação(val){
    const resultado = document.querySelector('#resultado');

    resultado.textContent = checkboxReturn == true ?  parseFloat(input_1.value) + parseFloat(input_2.value) : parseFloat(input_1.value) - parseFloat(input_2.value)
}