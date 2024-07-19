const inputIdade = document.querySelector('#input_Idade');
const resultado = document.querySelector('#resultado');
const btn = document.querySelector('#btn');

inputIdade.addEventListener('input', function(){
    this.value = this.value.replace(/\D/g, "");
});


btn.addEventListener('click', (e) =>{
    e.preventDefault();

    faixaEtaria(inputIdade.value);
});

function faixaEtaria(idade){
    if(idade >= 0  && idade < 15){
        resultado.textContent = 'Criança'
    }else if(idade >= 15 && idade < 30){
        resultado.textContent = 'Jovem'
    }else if(idade >= 30 && idade < 60){
        resultado.textContent = 'Adulto'
    }else{
        resultado.textContent = 'Idoso'
    }
};