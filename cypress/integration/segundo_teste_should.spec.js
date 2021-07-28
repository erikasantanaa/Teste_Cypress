/// <reference types ="cypress" />


context('Validar menus', () => {
    it('clicando no link comprar deve direcionar para a página de compra', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
        cy.get('#primary-menu > .menu-item-629 > a').as('ComprarMenuLink')
        cy.get('@ComprarMenuLink').contains('Comprar').and('have.attr', 'href')
        cy.get('@ComprarMenuLink').click()

        cy.contains('Produtos')
        //cy.url().contains('/shop')
    });
});
