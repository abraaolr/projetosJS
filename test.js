const pegaDadoAleatorio = require('./pegaDadoAleatorio')

const viloes = require('./dados/viloes')
const objetos = require('./dados/objetos')
const frasesClassicas = require('./dados/frasesClassicas')
const frasesFinais = require('./dados/frasesFinais')

coisasAleatoriasDoMundoChapolin()

function coisasAleatoriasDoMundoChapolin() {
    const timeOut = 2000
    console.log('')
    console.log('Mais rápido que uma tartaruga')
    console.log('Mais forte que um rato')
    console.log('Mais inteligente que um asno')
    console.log('Ele é o...')
    console.log('')
    setTimeout(() => {
        console.log('CHA PO LIN')
        console.log('')
        setTimeout(() => {
            console.log('Vejamos alguns fatos aleatórios do mundo Chapolin')
            console.log('')
            setTimeout(() => {
                console.log(Vilão: ${pegaDadoAleatorio(viloes)})
                console.log(Objeto: ${pegaDadoAleatorio(objetos)})
                console.log(Frases clássicas: ${pegaDadoAleatorio(frasesClassicas)})
                console.log('')
                setTimeout(() => {
                    console.log(Despedida: ${pegaDadoAleatorio(frasesFinais)})
                    console.log('')
                }, timeOut)
            }, timeOut)
        }, timeOut)
    }, timeOut)
}