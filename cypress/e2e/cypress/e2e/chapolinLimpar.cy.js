describe('Botão Limpar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000') // Ajuste a URL se necessário
  })

  it('deve limpar todos os campos de texto', () => {
    // Pré-condição: preencher manualmente os elementos DOM
    cy.get('#vilao').invoke('text', 'Vilão Teste')
    cy.get('#objeto').invoke('text', 'Objeto Teste')
    cy.get('#fraseClassica').invoke('text', 'Frase Teste')
    cy.get('#despedida').invoke('text', 'Despedida Teste')

    // Valida que os campos estão preenchidos
    cy.get('#vilao').should('contain.text', 'Vilão Teste')
    cy.get('#objeto').should('contain.text', 'Objeto Teste')
    cy.get('#fraseClassica').should('contain.text', 'Frase Teste')
    cy.get('#despedida').should('contain.text', 'Despedida Teste')

    // Ação: clicar no botão "Limpar"
    cy.get('button').contains('Limpar').click()

    // Pós-condição: todos os campos devem estar vazios
    cy.get('#vilao').should('have.text', '')
    cy.get('#objeto').should('have.text', '')
    cy.get('#fraseClassica').should('have.text', '')
    cy.get('#despedida').should('have.text', '')
  })
})
