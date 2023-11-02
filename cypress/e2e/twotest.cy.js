/// <reference types="cypress" />

describe('two test', () => {
    it('verify link', () => {
        cy.visit('https://demoqa.com/')
        cy.get('div.category-cards .card-body h5').contains('Elements').click();
        cy.get('#item-0').contains('Text Box').click();
        cy.get('#userName').type('John');
        cy.get('#userEmail').type('john@gmail');
        cy.get('#currentAddress').type('123 Main St');
        cy.get('#permanentAddress').type('123 Main St');
        cy.get('#submit').click();
        cy.get('#userEmail').clear()
        cy.get('input[placeholder="name@example.com"]').type('John Doe')
        cy.get('#submit').contains('Submit').should('be.visible')

        
        
})
})