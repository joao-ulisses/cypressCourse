/// <reference types="Cypress" />
 
describe('Handling Child Windows', function () {
    it('Should handle child window', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Open in a new tank removing the "_blank" attribute from the button
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        // Because the root website it's different there's a need to use cy.origin
        cy.origin('https://www.qaclickacademy.com', ()=> {
            cy.get('#navbarSupportedContent a[href*="about"').click()
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy')
        })
    })
})