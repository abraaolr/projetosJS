function pegaDadoAleatorio(array) {
  const indice = Math.floor(Math.random() * array.length)
  return array[indice]
}

const viloes = [
  'Poucas Trancas',
  'Quase Nada',
  'Tripa Seca',
  'Racha Cuca',
  'Rosa Rumorosa',
  'Pirata Alma Negra'
]

const objetos = [
  'Marreta Biônica',
  'Chiclete do Diabo',
  'Bola de cristal',
  'Telefone mudo',
  'Controle do tempo'
]

const frasesClassicas = [
  'Suspeitei desde o princípio!',
  'Não contavam com minha astúcia!',
  'Se aproveitam de minha nobreza!',
  'Todos os meus movimentos são friamente calculados!',
  'Sigam-me os bons!'
]

const frasesFinais = [
  'Palma, palma, não priemos cânico!',
  'Que não panda o cúco!',
  'Até a próxima aventura!',
  'Volto já, já!',
  'Silêncio! Que vai começar!'
]

function mostrarMensagem() {
  document.getElementById('vilao').textContent = pegaDadoAleatorio(viloes)
  document.getElementById('objeto').textContent = pegaDadoAleatorio(objetos)
  document.getElementById('fraseClassica').textContent = pegaDadoAleatorio(frasesClassicas)
  document.getElementById('despedida').textContent = pegaDadoAleatorio(frasesFinais)
}