/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";

describe('Hooks Test Suite', function () {
    before(function() {
        cy.fixture("example").then(function(data) {
            this.data = data;
        })
    })
    it('First Test', function() {
        const homePage = new HomePage();
        const productPage = new ProductPage();
        cy.visit('/angularpractice');
        homePage.getEditBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getTwoWayDataBinding().should('have.value', this.data.name);
        homePage.getEditBox().should('have.attr', 'minlength', '2');
        homePage.getEntrepreneaur().should('be.disabled');
        // cy.pause();
        homePage.getShopTab().click();

        this.data.productName.forEach((element) => {
            cy.selectProduct(element);
        })
        productPage.getCheckoutButton().click();
        var sum = 0;
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount = $el.text();
            var res = amount.split(" ")[1];
            res = res.trim();
            sum = Number(sum) + Number(res);
        }).then(() => {
            cy.log(sum);
        });
        cy.get('h3 strong').then((element) => {
            const amount = element.text();
            var res = amount.split(" ")[1];
            var total = res.trim();
            expect(Number(total)).to.equal(sum);
        })
        cy.contains('Checkout').click();
        cy.get('#country').type('India');
        cy.get('.suggestions > ul > li > a').click();
        cy.get('#checkbox2').click({force: true});
        cy.get('input[type="submit"').click();
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).');
        cy.get('.alert').then((element) => {
            const actualText = element.text();
            expect(actualText.includes("Success")).to.be.true
        })
    })
})