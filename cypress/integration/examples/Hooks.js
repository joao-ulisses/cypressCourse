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
        cy.visit("https://rahulshettyacademy.com/angularpractice");
        homePage.getEditBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getTwoWayDataBinding().should('have.value', this.data.name);
        homePage.getEditBox().should('have.attr', 'minlength', '2');
        homePage.getEntrepreneaur().should('be.disabled');
        cy.pause();
        homePage.getShopTab().click();

        this.data.productName.forEach((element) => {
            cy.selectProduct(element);
        })
        productPage.getCheckoutButton().click();
    })
})