const inputNumber = document.getElementById('inputNumber');
const btn = document.getElementById('btn');

let objetos = [];



btn.addEventListener('click', () => {
    //Captura o valor de input do usuario
    objetos.push(inputNumber.value);

    //Recebe a quantidade de objetos contidos no array
    let contagemObjetos = objetos.length;
    console.log(contagemObjetos)

    comparar(contagemObjetos);
    
});

function comparar(val){
    let i = 0;
    while((i - val) <= 0){
        i++;
        console.log(`i = ${i}`);
    }
}