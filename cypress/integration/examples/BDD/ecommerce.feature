Feature: End to end Ecommerce validation

    application Regression

    @Regression
    Scenario: Ecommerce products delivery
        Given I open Ecommerce Page
        When I fill the form details
        Then validate the forms behaviour
        Then select the Shop page
        When I add items to Cart
        Then Validate the total prices
        Then select the country submit and verify you