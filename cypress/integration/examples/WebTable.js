/// <reference types="Cypress" />

describe('My First Test Suite', function () {
    it('My first test case', function() {
        cy.visit("/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes("Python")) {
                cy.get("tr td:nth-child(2").eq(index).next().then(function(price){
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})