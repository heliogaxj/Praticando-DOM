const nome = document.getElementById('nome');

nome.addEventListener('blur', () => {
    if(nome.value.length < 5){
        nome.style.border = '2px solid red'
    }else{
        nome.style.border = '2px solid green'
    }
})