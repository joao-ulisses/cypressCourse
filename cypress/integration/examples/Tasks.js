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
        cy.get(".order-summary button").contains("Excel").click();

        const filePath = Cypress.config("fileServerFolder") + "/cypress/downloads/ordedr-invoice_anshika.xlsx";
        cy.task('excelToJsonConverter', filePath).then((result) => {
            expect(productName).to.equal(result.data[1].B);
        });

        cy.readFile(filePath).then((text) => {
            expect(text).to.include(productName);
        });
    })
})