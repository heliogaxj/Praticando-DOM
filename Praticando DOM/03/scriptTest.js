let valorInicial = Date.now();


let interval = setInterval(() => {
    const inicioDaContagem = Date.now();

    const Millisegundos = inicioDaContagem - valorInicial;
    let centezimosDeSegundos = Math.floor(Millisegundos / 10);

    limitarMillisegundos(Millisegundos);
    addZero(centezimosDeSegundos);
});

function limitarMillisegundos(Millisegundos){
    if(Millisegundos >= 1000){
        valorInicial = Date.now();
    }
};

function addZero(time){
    return time < 10 ? `0${time}` : time;
}