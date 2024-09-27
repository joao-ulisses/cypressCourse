/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Frames test', function () {
    it('Demo example', function() {
        cy.visit('/AutomationPractice/')
        cy.frameLoaded("#courses-iframe")

        cy.iframe().find("a[href='mentorship']").eq(0).click()
        cy.wait(3000);
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
    })
})