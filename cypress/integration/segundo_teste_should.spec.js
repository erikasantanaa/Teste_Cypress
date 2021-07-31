/// <reference types ="cypress" />


context('Validar menus', () => {
    it('clicando no link comprar deve direcionar para a página de compra', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
        cy.get('#primary-menu > .menu-item-629 > a').as('ComprarMenuLink')
        cy.get('@ComprarMenuLink').contains('Comprar').and('have.attr', 'href').and('include', 'shop')
        // cy.get('@ComprarMenuLink').click()

        // cy.contains('Produtos')
        //cy.url().contains('/shop')

        cy.get('.page-title').should('contain', 'Produtos')
    });
});


/*
cy.visit('http://lojaebac.ebaconline.art.br/')

cy.get('#primary-menu > .menu-item-629 > a').contains('Comprar')
cy.get('#primary-menu > .menu-item-629 > a').click()

//Refatorar: Usa-se os as('') com um apelido

cy.get('#primary-menu > .menu-item-629 > a').as('ComprarMenuLink')
cy.get('@ComprarMenuLink').contains('Comprar')
cy.get('@ComprarMenuLink').click()

//Combinando Ações
cy.get('@ComprarMenuLink').contains('Comprar').click()

//Verificando Atributos
cy.get('@ComprarMenuLink').contains('Comprar').and('have.attr', 'href')
cy.get('@ComprarMenuLink').click()


//---
cy.contains('Produtos')


*/