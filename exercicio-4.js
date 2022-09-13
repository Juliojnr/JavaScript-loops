const prompt = require ('prompt-sync')();

    let cont = 0;
    let qtdCalmas = 0;
    let qtdMNervosas = 0;
    let qtdHAgressivos = 0;
    let qtdDCalmos = 0;
    let qtdNervosos40 = 0;
    let qtdCalmos18 = 0;


    while(cont < 3){
        const idadeText = prompt ('Digite a idade: ');
        const idade = Number(idadeText);
        console.log('Escolha o sexo entre:\n\n');
        console.log('1 - Homem');
        console.log('2 - Mulher');
        console.log('3 - Outros');
        const sexoText = prompt ('Escolha a opção de sexo: M/F');
        const sexoNumber = prompt (sexoText)
        console.log('Escolha um humor entre:\n\n');
        console.log('1 - Calmo');
        console.log('2 - Nervoso');
        console.log('3 - Agressivo');
        const humorText = prompt('Escolha a opção de Humor:');
        const humorNumber = Number (humorText)

        if(humor == 1){
            qtdCalmas++;
        }
        if(sexo == 2 && humor == 2){
            qtdMNervosas++;
        }
        if(sexo == 1 && humor == 3){
            qtdHAgressivos++;
        }
        if(sexo == 3 && humor == 1){
            qtdDCalmos++;
        }
        if(humor == 2 && idade > 40){
            qtdNervosos40++;
        }
        if(humor == 1 && idade < 18){
            qtdCalmos18++;
        }

        cont++
    }

    console.log(`\nO total de pessoas calmas é ${qtdCalmas}`);
    console.log(`\nO total de pessoas calmas maior de 18 é ${qtdCalmos18}`);
    console.log(`\nO total de homens calmos é ${qtdDCalmos}`);
    console.log(`\nO total de homens agressivos é ${qtdHAgressivos}`);
    console.log(`\nO total de mulheres nervosas é ${qtdMNervosas}`);
    console.log(`\nO total de homens nervosos mais de 40 é ${qtdNervosos40}`);