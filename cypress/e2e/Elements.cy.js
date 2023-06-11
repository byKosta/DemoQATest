/// <reference types="cypress" />
import elements from '../fixtures/elements.json'


describe('first test', () => {
  it('check elements', () => {
      cy.visit('https://demoqa.com/')
      cy.get('body').contains('Elements').click()
      cy.get('div.main-header').should('have.text', elements.checkingElements)

     
      })
  })
