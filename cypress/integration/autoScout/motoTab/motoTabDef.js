/// <reference types="Cypress" />
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import MotobikeTab from '../pages/motobikeTab'

Given('I open Autoscount page',()=> {
    cy.clearCookies
    cy.visit(Cypress.env('url'))
})
const motobikeTab = new MotobikeTab()
When('I select Motobike tab',()=>{
    motobikeTab.getMototab().click()
})

And('I enter data into Search box',()=>{
    motobikeTab.getNewCheckbox().uncheck({force: true}) 
    motobikeTab.getUsedCheckbox().check({force: true}) 
    motobikeTab.getPreRegisteredCheckbox().uncheck({force: true}) 
    motobikeTab.selectMakeItem('Honda')
    motobikeTab.selectModelItem('Transalp')
    motobikeTab.selectPriceToItem('4000')
    motobikeTab.selectCountryItem('Austria')
    motobikeTab.selectZipcodeItem('2853 Bad Schönau')
    motobikeTab.selectKmItem('200')
    motobikeTab.getCrossBorderCheckbox().check({force: true}) 
})

And ('I click Search button',()=>{
    motobikeTab.getSearchButton().click()
})

Then ('I will see the the matched motobikes',()=>{
    cy.checkSearchResult(4, 'Honda', 'Transalp', 'Used', 4000)
    
})
