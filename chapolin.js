const pegaDadoAleatorio = require('./pegaDadoAleatorio')

const viloes = require('./dados/viloes')
const objetos = require('./dados/objetos')
const frasesClassicas = require('./dados/frasesClassicas')
const frasesFinais = require('./dados/frasesFinais')

const timeOut = 2000

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function coisasAleatoriasDoMundoChapolin() {    
    console.log('')
    console.log('Mais rápido que uma tartaruga')
    console.log('Mais forte que um rato')
    console.log('Mais inteligente que um asno')
    console.log('Ele é o...')
    console.log('')

    await delay(timeOut)
    console.log('CHA PO LIN')
    console.log('')
    
    await delay(timeOut)
    console.log('Vejamos alguns fatos aleatórios do mundo Chapolin')
    console.log('')

    await delay(timeOut)
    console.log(`Vilão: ${pegaDadoAleatorio(viloes)}`)
    console.log(`Objeto: ${pegaDadoAleatorio(objetos)}`)
    console.log(`Frases clássicas: ${pegaDadoAleatorio(frasesClassicas)}`)
    console.log('')

    await delay(timeOut)
    console.log(`Despedida: ${pegaDadoAleatorio(frasesFinais)}`)
    console.log('')
               
}
coisasAleatoriasDoMundoChapolin()