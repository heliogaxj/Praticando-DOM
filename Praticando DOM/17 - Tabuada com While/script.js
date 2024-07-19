let y = 0;
let x = 0;



while(x <= 10){
    while(y <= 10){
        document.write(`${x} x ${y} = ${(y * x)} <br/>`);
        y++;
    }
    y = 0;
    x++;
}