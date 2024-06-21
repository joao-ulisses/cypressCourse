/// <reference types="Cypress" />

describe('My First Test Suite', function () {
    it('My first test case', function() {
        expect(true).to.equal(true)
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        //fixture
    })

    // it('My second test case', function() {
        // expect(true).to.equal(false)
    // })
})