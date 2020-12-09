/// <reference types="cypress" />
/// <reference types="../../../support" />

import FindVehiclePage from '../../../support/autoScout/pages/FindVehiclePage';

describe("Find Caravans by Conditions", function(){
    before(function(){
        cy.visit(Cypress.env('url'))
    })
    it("FVS_001_FindCaravan", function(){
        //const findveh = new FindVehiclePage()
        cy.searchByCaravan(
            'Caravan',
            'Autostar',
            '2016',
            '1500',
            'Germany',
            '200'
        );
    })
})

