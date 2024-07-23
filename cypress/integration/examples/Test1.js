/// <reference types="Cypress" />

describe('My First Test Suite', function () {
    it('My first test case', function() {
        expect(true).to.equal(true)
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        // Below code it's a better strategy than the code above
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        //fixture
    })

    // it('My second test case', function() {
        // expect(true).to.equal(false)
    // })
})