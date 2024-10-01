describe('My First Test Suite', function () {
    it('Intercept HTTP Responses', function() {
        cy.visit('/angularAppdemo/')

        cy.intercept({
            method: 'GET',
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }, {
            statuscode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"
                }
            ]
        }).as('bookretrievals');
        cy.get("button[class='btn btn-primary']").click();
        cy.wait('@bookretrievals').then(function ({request, response}) {
            cy.get('tr').should('have.length', response.body.length+1);
        });
        cy.get('p').should('have.text', 'Oops only 1 Book available');
    })
})