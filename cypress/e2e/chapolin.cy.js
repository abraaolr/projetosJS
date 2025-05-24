describe('Mundo do Chapolin', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/public/index.html')
    })

    it('deve exibir dados aleatórios ao clicar no botão', () => {
        cy.contains('button', 'Gerar fatos aleatórios').click()

        cy.get('#vilao').should('not.be.empty')
        cy.get('#objeto').should('not.be.empty')
        cy.get('#frase').should('not.be.empty')
        cy.get('#despedida').should('not.be.empty')
    })
})
