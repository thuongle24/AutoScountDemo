/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe';

describe("My First test suite", function()
{
    it("TC01", function()
    {
        cy.clearCookies
        cy.visit('https://www.autoscout24.com/')
        cy.frameLoaded('#gdpr-consent-notice')
        cy.iframe().find('.accept-all mat-button mat-button-base mat-raised-button').eq(0).click()
        cy.get('.sc-tab--with-icon--active').click() //Used and New Car tab
        cy.get('[data-tab-id="moto"]').should('be.visible') //Moto tab
        cy.get('[data-tab-id="caravan"]').should('be.visible')//Caravan tab
        cy.get('[data-tab-id="transporter"]').should('be.visible') //Transporter tab
        cy.contains('label', 'New')  // find your text
            .parent('span')          // move to parent div 
            .find("input[type='checkbox']")   // select it's input
            .uncheck({force: true}) 

        cy.contains('label', 'Used')  // find your text
            .parent('span')          // move to parent div 
            .find("input[type='checkbox']")   // select it's input
            .uncheck({force: true}) 
        
        cy.get("input[placeholder='Make']").click();
        cy.get('.react-autocomplete__list-item--selected').contains('Audi').click()
        
        cy.get("input[placeholder='Model']").click() //Model combobox
        cy.get('.react-autocomplete__list-item--selected').contains('100').click()

        cy.get("input[placeholder='First Registration']").click() // First Registration combobox
        cy.get('.react-autocomplete__list-item').contains('2018').click()

        cy.get("select[id='priceto']").should('be.visible').select('1000')  //Price to combobox 

        cy.get('.as24-custom-dropdown--selected > p').click() //Country combobox
        cy.get("[class='sc-block cl-noselect']").contains('Germany').click()


        cy.get("input[placeholder='City/ZIP']").type("65558") //city comobobox
        cy.get('.react-autocomplete__list-item').contains(" Gückingen (Gmd. Burgschwalbach)").click()

        cy.get('[data-test=zipRadius]').select('50') //Radius combobox

        cy.contains('label', 'Cross-border')  // find your text
            .parent('span')          // move to parent div 
            .find("input[type='checkbox']")           // select it's input
            .check({force: true}) ; 

        //cy.get('.cl-refine-search-link-container').should('be.visible') //refine search
        cy.get('[data-test=search]').click({force: true}) //search button
    }
    )
}
)

