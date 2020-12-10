class SearchResultPage
{
    getMakeModelItems()
    {
        return cy.get("[class='cldt-summary-makemodel sc-font-bold sc-ellipsis']")
    }
    getPriceItems()
    {
        return cy.get("[class='cldt-price sc-font-xl sc-font-bold']")
    }
    getVehicleClassValues()
    {
        return cy.get("[class='cldt-summary-vehicle-data'] [data-type='offer-type']")
    }
}
export default SearchResultPage;