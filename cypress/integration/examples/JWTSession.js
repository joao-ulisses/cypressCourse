const neatCSV = require('neat-csv');
let productName;

describe('My First Test Suite', function () {
    it('JWT Session', function() {
        cy.LoginAPI().then(function() {
            cy.visit("/client", {
                onBeforeLoad: function(window) {
                    window.localStorage.setItem('token', Cypress.env('token'));
                }
            })
        })

        cy.get(".card-body b").eq(1).then(function(el) {
            productName = el.text();
        });
        cy.get(".card-body button:last-of-type").eq(1).click();
        cy.get("[routerlink*='cart'").click();
        cy.contains("Checkout").click();
        cy.get("[placeholder*='Country']").type("ind");
        cy.get(".ta-results button").each(($el, index, $list) => {
            if ($el.text === "India") {
                cy.wrap($el).click();
            }
        })
        cy.get(".action__submit").click();
        cy.wait(2000);
        cy.get(".order-summary button").click();

        cy.readFile(Cypress.config("fileServerFolder") + "cypress/downloads/order-invoice-rahul.csv").then(async(text) => {
            const csv = await neatCSV(text);
            const actualProductCSV = csv[0]["Product Name"];
            expect(productName).to.equal(actualProductCSV);
        });
    })
})