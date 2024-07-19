const input_1 = document.getElementById('input-1');

input_1.onfocus = () => {input_1.style.backgroundColor = 'yellow'};
input_1.onblur = () => {input_1.style.backgroundColor = ''};
input_1.onkeyup = () => {caracteresInput()};

function caracteresInput() {
    let conatgemInput = input_1.value.length;
    conatgemInput < 3 ? input_1.style.backgroundColor = 'red' : input_1.style.backgroundColor = 'green';
}