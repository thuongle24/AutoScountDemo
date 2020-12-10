import SearchResultPage from '../pages/searchResultPage'

Cypress.Commands.add('checkSearchResult', (totalResult, make, model, vehClass, price) => {
    // Put your source code here
    const searchResultPage = new SearchResultPage()
    searchResultPage.getMakeModelItems().should('have.length', totalResult)
        .each(($el, index, $list) => {
            cy.wrap($el).should('have.text',make + ' ' + model)
          })
    searchResultPage.getVehicleClassValues().should('have.length', totalResult)
        .each(($el, index, $list) => {
            cy.wrap($el).should('contain.text',vehClass)
            })
    searchResultPage.getPriceItems().should('have.length', totalResult)
         .each(($el, index, $list) => {
          const priceValue=$el.text().trim()
          var res= priceValue.split(" ")  
         res=res[1].replace(",","").replace(".","").replace("-","")
          
         expect(parseInt(res)).to.be.lessThan(price)
              })
})