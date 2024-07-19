const inputsFilter = document.querySelectorAll('.inputFilter');
const nome = document.querySelector('#nome');
let altura = document.querySelector('#altura');
let peso = document.querySelector('#peso');
const btn = document.querySelector('#btn');
const hidden = document.querySelector('#hidden');
const resultado = document.querySelector('#resultado');
const faixa = document.querySelector('#faixa');

inputsFilter.forEach(input => {
    input.addEventListener('input', function(){
        this.value = this.value.replace(/\D/g, "");
    });
});

function inputNome(nome){
    if(nome == ''){
        alert('Insira seu nome');
        location.reload();
    }
}


btn.addEventListener('click', (e) =>{
    e.preventDefault();

    const IMC = converterCalcular(altura, peso);
    resultado.textContent = IMC;
    faixasDescritivas(IMC);

});

function converterCalcular(altura, peso){
    altura = altura.value / 100;
    peso = parseFloat(peso.value);

    let M = peso / (altura**2);

    return M.toFixed(2);
};

function faixasDescritivas(IMC){
    const paciente = document.querySelector('#paciente');
    inputNome(nome.value);

    if(IMC < 16){
        faixa.textContent = 'Baixo peso, MUITO GRAVE'
        faixa.style.color = 'red'
    }else if(IMC >= 16 && IMC < 16.99){
        faixa.textContent = 'Baixo peso, GRAVE'
        faixa.style.color = '#cb8606'
    }else if(IMC >= 17 && IMC < 18.49){
        faixa.textContent = 'Baixo peso'
        faixa.style.color = 'yellow'
    }else if(IMC >= 18.50 && IMC < 24.99){
        faixa.textContent = 'Peso NORMAL'
        faixa.style.color =  'green'
    }else if(IMC >= 25 && IMC < 29.99){
        faixa.textContent = 'SOBREPESO'
        faixa.style.color =  'yellow'
    }else if(IMC >= 30 && IMC < 34.99){
        faixa.textContent = 'Obesidade GRAU I'
        faixa.style.color =  '#cb8606'
    }else if(IMC >= 35 && IMC < 39.99){
        faixa.textContent = 'Obesidade GRAU II'
        faixa.style.color =  '#ff6000'
    }else if(IMC > 40){
        faixa.textContent = 'Obesidade GRAU III'
        faixa.style.color =  'red'
    }else{
        alert('Observe se os valores inseridos são todos validos');
    }

    paciente.textContent = nome.value;
    hidden.style.visibility = 'visible';
}