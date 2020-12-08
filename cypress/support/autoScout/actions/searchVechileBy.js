/// <reference types="Cypress" />

import FindVehiclePage from '../../../support/autoScout/pages/FindVehiclePage';

Cypress.Commands.add("searchByCaravan",(bodytype, make, stregistration, price, country, radius) =>{
    const findveh = new FindVehiclePage()
    
    //Click Tab
     findveh.getCaravanTab().click({force:true})
     findveh.getCaravanTab().should('have.attr','class','sc-tab--with-icon sc-tab--with-icon--active')

     //Select Body Types
     findveh.getBodyType().click({force:true})
     findveh.getBodyTypeOptions().contains(bodytype).click({force:true})
     //findveh.getBodyTypeOptions().contains('Panel van').click({force:true})
     findveh.getBodyType().click({force:true})

     //Select Make
     findveh.getMake().click()
     findveh.getMakeOption().contains(make).click()

     //Select First Registration
     findveh.getFirsRegistration().click();
     findveh.getFirsRegistrationOption().contains(stregistration).click();

     //Select Price
     findveh.getPrice().select(price) //Price

     //Select Country
     findveh.getCountry().click();
     findveh.getCountryOption().contains(country).click();

     //Enter City
     findveh.getCity().type('65558')      //City ZIP
     findveh.getCityOption().contains(" Gückingen (Gmd. Burgschwalbach)").click()

     //Select ZIP Radius
     findveh.getRadius().select(radius);

     //Tick/Untick Cross-Border
     cy.contains('label', 'Cross-border')  // find your text
     .parent('span')          // move to parent div 
     .find("input[type='checkbox']")           // select it's input
     .check({force:true}); 

     //Click Search button
     findveh.getSearchButton().click({force:true})
})