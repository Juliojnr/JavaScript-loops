const prompt = require ('prompt-sync')();

    let cont = 0
    let cont1 = 0
    let idade1 = 0
    let idade = Number (idade1)

        while (idade != -99){
         idade = prompt ('Digite sua idade: ');  
        if(idade < 21){
                cont++
        }   
        else if(idade > 50){
                cont1++
        }
    }

     console.log(`Total de pessoas com menos de 21 anos: ${cont}`);
     console.log(`Total de pessoas com mais de 50 anos: ${cont1}`);

    
    