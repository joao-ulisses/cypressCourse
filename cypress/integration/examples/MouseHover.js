/// <reference types="Cypress" />
 
describe('My First Test Suite', function () {
    it('My first test case', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // cy.get('div.mouse-hover-content').invoke('show')
        // Force true clicks on invisible elements
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')
    })
})