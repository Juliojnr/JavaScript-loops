const prompt = require ('prompt-sync')();

    let cont = 0
    let cont1 = 0

        for(let i = 0; i < 10; i++){
            let anyNumberText = prompt ('Digite um número: ');
            let anyNumber = Number (anyNumberText);
                if(anyNumber % 2 == 0){
                    cont++
                  }
                else if(anyNumber % 2 == 1){
                    cont1++
                }             
    }
    console.log(`Números pares: ${cont}`);
    console.log(`Números ímpares: ${cont1}`);
    
    