const pegaDadoAleatorio = require('./pegaDadoAleatorio')

const viloes = require('./dados/viloes')
const objetos = require('./dados/objetos')
const frasesClassicas = require('./dados/frasesClassicas')

coisasAleatoriasDoMundoChapolin()

function coisasAleatoriasDoMundoChapolin() {
    console.log('')
    console.log('Mais rápido que uma tartaruga')
    console.log('Mais forte que um rato')
    console.log('Mais inteligente que um asno')
    console.log('Ele é o...')
    console.log('')
    console.log('CHA PO LIN')
    console.log('')
    console.log('Vejamos alguns fatos aleatórios do mundo Chapolin')
    console.log('')
    console.log(`Vilão: ${pegaDadoAleatorio(viloes)}`)
    console.log(`Objeto: ${pegaDadoAleatorio(objetos)}`)
    console.log(`Frases clássicas: ${pegaDadoAleatorio(frasesClassicas)}`)
    console.log('')
}