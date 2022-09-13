const prompt = require ('prompt-sync')();

    for(let i = 1000; i <= 1999; i++ ){ 
        if(i % 11 == 5){
        console.log(`Número do contador que divido por 11 tem o resto 5: ${i}`);
        }
    }