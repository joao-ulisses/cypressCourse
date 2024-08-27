/// <reference types="Cypress" />
 
describe('Cart Test Suite', function () {
    it('Add item to cart and proceed', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        // Search item
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // Get Products
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                $el.find('button').click()
            }
        })
        // Get cart and click
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        
    })
})