function calcular(tipo, valor){
    if(tipo === 'acao') {

        //Limpar campo de visualização
        if(valor === 'c') {
            document.getElementById('resultado').value = '';
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor;
        }

        if(valor === '='){
            const valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo;
        }

    } else if(tipo === 'valor') {
        document.getElementById('resultado').value += valor;
    }
}