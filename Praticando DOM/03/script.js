let startMilli = Date.now();
let seconds = 0;

setInterval(()=>{

    const currentMilli = Date.now();
    const thousandths = currentMilli - startMilli;
    seconds = Math.floor(thousandths / 1000);
    const milliseconds = thousandths % 1000;

    console.log(milliseconds, seconds, thousandths);
},0);
