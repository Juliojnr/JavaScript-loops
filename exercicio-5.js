const prompt = require ('prompt-sync')();

    let cont = 0
    let number = 0
    
        do {
            number = parseInt (prompt ('Digite um número qualquer: '))
            cont += number
        } while(number != 0)

        console.log(`Soma dos números: ${cont}`)
        


