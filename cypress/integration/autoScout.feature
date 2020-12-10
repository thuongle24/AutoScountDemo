Feature: Motor Bike Search Validation


    Application Regression

    Scenario: User is able to search for motor bike products
    Given I open Autoscount page
    When I select Motobike tab
    And I enter data into Search box
    And I click Search button
    Then I will see the the matched motobikes