const tabuada = document.querySelector("#tabuada");

function criarTabuada() {
    let estrutura = '';
  for (let y = 1; y <= 10; y++) {
    for (x = 1; x <= 10; x++) {
      estrutura += (`${y} x ${x} = ${y * x} <br/ >`);
    }
  }
  tabuada.innerHTML = estrutura;
}

criarTabuada();