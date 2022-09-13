const prompt = require ('prompt-sync')();
    let cont1 = 0
    let cont = 0
    let media = 0
    let number = 0

    do{
        number = parseFloat (prompt ('Digite um número: '))
        if(number % 3 == 0){
            cont1 += number
            cont++
        }
    }while(number != 0)

    media = cont1/cont

    console.log(`Múltiplos de 3: ${cont}`)
    console.log(`Soma dos múltiplos: ${cont1}`)
    console.log(`Média dos múltiplos: ${media}`)