/// <reference types="cypress" />


describe('Arrays', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('https://openweathermap.org/')
        cy.get('#desktop-menu a[href="/guide"]').invoke('text').as('menuGuide');
    })
    

    it('Verify Meny Search', function () {
        cy.get('.search-container > input').type('New York', {force: true})
        cy.get('button[type="submit"]').click({force: true})
        cy.get('ul.search-dropdown-menu li').each(($el, index) => {
           let text = $el.text()
           if(text.includes('New York City, US')){
               cy.wrap($el).click();
           }
        })
        it
    })
})
