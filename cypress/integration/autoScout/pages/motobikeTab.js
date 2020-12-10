class MotobikeTab
{
    getMototab()
    {
        return cy.get('[data-tab-id="moto"]')
    }
    getNewCheckbox()
    {
        return cy.contains('label', 'New')  // find your text
        .parent('span')          // move to parent div 
        .find("input[type='checkbox']")
    }
    getUsedCheckbox()
    {
        return cy.contains('label', 'Used')  // find your text
        .parent('span')          // move to parent div 
        .find("input[type='checkbox']")
    }
    getPreRegisteredCheckbox()
    {
        return cy.contains('label', 'Pre-registered')  // find your text
        .parent('span')          // move to parent div 
        .find("input[type='checkbox']")
    }
    getMakeDropdown()
    {
        return cy.get("input[placeholder='Make']")
    }
    selectMakeItem(make)
    {
        this.getMakeDropdown().click()
        cy.get('.react-autocomplete__list-item ').contains(make).click()
    }
    getModelDropdown()
    {
        return cy.get("input[placeholder='Model']")
    }
    selectModelItem(model)
    {
        this.getModelDropdown().click()
        cy.get('.react-autocomplete__list-item ').contains(model).click()
    }
    getBodyStyleDropdown()
    {
        return cy.get('.cl-filter-bodytype')
    }
    getPriceToDropdown()
    {
        return cy.get("select[id='priceto']")
    }
    selectPriceToItem(priceToItem)
    {
        this.getPriceToDropdown().should('be.visible').select(priceToItem) 
    }
    getCountryDropdown()
    {
        return cy.get('[data-test=country] > .as24-custom-dropdown > .as24-custom-dropdown--selected')
    }
    selectCountryItem(country)
    {
        this.getCountryDropdown().click()
        cy.get("[class='sc-block cl-noselect']").contains(country).click()
    }
    getZipCodeTextbox()
    {
        return cy.get("input[placeholder='City/ZIP']")
    }
    selectZipcodeItem(item)
    {
        this.getZipCodeTextbox().type(item)
        cy.get('.react-autocomplete__list-item').contains(item).click()
    }
    getKmDropdown()
    {
        return cy.get('[data-test=zipRadius]')
    }
    selectKmItem(km)
    {
        this.getKmDropdown().should('be.visible').select(km) 
    }
    getCrossBorderCheckbox()
    {
        return cy.contains('label', 'Cross-border')  // find your text
        .parent('span')          // move to parent div 
        .find("input[type='checkbox']") 
    }
    getSearchButton()
    {
        return cy.get('[data-test=search]')
    }
}
export default MotobikeTab;