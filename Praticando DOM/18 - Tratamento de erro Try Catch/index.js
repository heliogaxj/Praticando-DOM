const validate = function(event){
    try{
        event.preventDefault();

        const form = this;
        if(form.name.value == '') throw 'Preencha o seu nome';
        if(form.name.value < 3) throw 'Seu nome deve conter ao menos 3 caracteres';
        if(form.phone.value == '') throw 'Preencha o seu telefone';
        if(form.phone.value.length < 11) throw new Error('Seu telefone deve conter 11 caracteres');

        alert('Mensagem enviada com sucesso!');
    } catch(error){
        alert(error)
    }
}

document.querySelector('form').addEventListener('submit', validate);