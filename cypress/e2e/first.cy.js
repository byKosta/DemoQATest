/// <reference types="cypress" />
import messages from '../fixtures/messages.json'

describe('first test', () => {
  it('should navigate to the demoQA website', () => {
      cy.visit('https://demoqa.com/')
      cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.equal(messages.deleteConfirmMessages)
      })
  })
})
