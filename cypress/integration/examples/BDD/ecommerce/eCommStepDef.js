import HomePage from "../../../pageObjects/HomePage";
import ProductPage from "../../../pageObjects/ProductPage";

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const homePage = new HomePage();
const productPage = new ProductPage();

let data;

before(() => {
    cy.fixture("example").then(function(fData) {
        data = fData;
    })
})

Given('I open Ecommerce Page', () => {
    cy.visit('/angularpractice');
})

When('I add items to Cart', () => {
    data.productName.forEach((element) => {
        cy.selectProduct(element);
    })
    productPage.getCheckoutButton().click();
})

Then('Validate the total prices', () => {
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
})

Then('select the country submit and verify you', () => {
    cy.contains('Checkout').click();
    cy.get('#country').type('India');
    cy.get('.suggestions > ul > li > a').click();
    cy.get('#checkbox2').click({force: true});
    cy.get('input[type="submit"').click();
    cy.get('.alert').then((element) => {
        const actualText = element.text();
        expect(actualText.includes("Success")).to.be.true
    })
})

When('I fill the form details', () => {
    homePage.getEditBox().type(data.name);
    homePage.getGender().select(data.gender);
})

Then('validate the forms behaviour', () => {
    homePage.getTwoWayDataBinding().should('have.value', data.name);
    homePage.getEditBox().should('have.attr', 'minlength', '2');
    homePage.getEntrepreneaur().should('be.disabled');
})

Then('select the Shop page', () => {
    homePage.getShopTab().click();
})