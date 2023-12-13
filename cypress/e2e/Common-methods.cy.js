/// <reference types="Cypress" />



describe('Common methods', () => {
   
    it('verify link', () => {
        cy.visit('https://demoqa.com/');
        //cy.pause();
        cy.get('div.card-body').find('h5').should('have.length', 6);
        cy.title().should('eq', 'DEMOQA');
        cy.log('Test has been completed');
        cy.get('div.avatar').should('have.css','color','rgb(1, 160, 224)');
        cy.get('div.card-body h5').contains('Elements').click();
        cy.get('div.main-header').should('contain', 'Elements');
        cy.get('div.main-header').should('be.visible'); 
        cy.contains('Text Box').click();
        cy.get('input#userName')
        .should('have.attr', 'placeholder', 'Full Name')  
        .type('John')
        .should('have.value', 'John')
        .clear()
        .should('have.value', '');

        cy.get('div.element-group #item-1').contains('Check Box').click();
        cy.get('input#tree-node-home').check({force: true}).should('be.checked');
        cy.get('input#tree-node-home').uncheck({force: true});
      
    });



    it('method invoc', () => {
        cy.timeout(7000)
        cy.viewport(1280, 720)

        cy.visit('https://openweathermap.org/')
        cy.contains('Marketplace').invoke('removeAttr', 'target').click();
})
});

 
