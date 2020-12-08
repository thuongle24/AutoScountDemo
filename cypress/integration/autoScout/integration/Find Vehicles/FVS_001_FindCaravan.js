/// <reference types="cypress" />
/// <reference types="../../../../support" />

import FindVehiclePage from '../../../../support/autoScout/pages/FindVehiclePage';

describe("Find Caravans by Conditions", function(){
    before(function(){
        cy.visit(Cypress.env('url'))
    })
    it("FVS_001_FindCaravan", function(){
        const findveh = new FindVehiclePage()

        cy.searchByCaravan(
            'Caravan',
            'Autostar',
            '2016',
            '1500',
            'Germany',
            '200'
        );
        
        //Click Tab
       /* findveh.getCaravanTab().click({force:true})
        findveh.getCaravanTab().should('have.attr','class','sc-tab--with-icon sc-tab--with-icon--active') 

        //Select Body Types
        findveh.getBodyType().click({force:true})
        findveh.getBodyTypeOptions().contains('Caravan').click({force:true})
        findveh.getBodyTypeOptions().contains('Panel van').click({force:true})
        findveh.getBodyType().click({force:true})

        //Select Make
        findveh.getMake().click()
        findveh.getMakeOption().contains('Autostar').click()

        //Select First Registration
        findveh.getFirsRegistration().click();
        findveh.getFirsRegistrationOption().contains('2016').click();

        //Select Price
        findveh.getPrice().select('1500') //Price

        //Select Country
        findveh.getCountry().click();
        findveh.getCountryOption().contains('Germany').click();

        //Enter City
        findveh.getCity().type('65558')      //City ZIP
        findveh.getCityOption().contains(" Gückingen (Gmd. Burgschwalbach)").click()

        //Select ZIP Radius
        findveh.getRadius().select('200');

        //Tick/Untick Cross-Border
        cy.contains('label', 'Cross-border')  // find your text
        .parent('span')          // move to parent div 
        .find("input[type='checkbox']")           // select it's input
        .check({force:true}); 

        //Click Search button
        findveh.getSearchButton().click({force:true})*/
    })
})

