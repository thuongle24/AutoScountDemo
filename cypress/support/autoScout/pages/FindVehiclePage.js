class FindVehiclePage{
    
//3. Fields under Caravan Tab
    getCaravanTab(){
        return cy.get('[data-tab-id="caravan"]')
    }
    
    getBodyType(){
        return cy.get('div[data-test="bodytype"]')
    }
    getBodyTypeOptions(){
        return cy.get('.cl-filter-bodytype-options')
    }
    
    getMake(){
        return cy.get("input[placeholder='Make']")
    }
    getMakeOption(){
        return cy.get('.react-autocomplete__list-item')
    }

    getFirsRegistration(){
        return cy.get("input[placeholder='First Registration']")
    }
    getFirsRegistrationOption(){
        return cy.get('.react-autocomplete__list-item')
    }

    getPrice(){
        return cy.get('select#priceto')
    }
    
    getCountry(){
        return cy.get("div[data-test='country']")
    }
    getCountryOption(){
        return cy.get("span[class='cl-dropdown-cursorpointer sc-ellipsis']")
    }

    getCity(){
        return cy.get("input[placeholder='City/ZIP']")
    }
    getCityOption(){
        return cy.get('.react-autocomplete__list-item')
    }

    getRadius(){
        return cy.get("select[data-test='zipRadius']")
    }

    getCrossBorder(){

    }

    getSearchButton(){
        return cy.get("[data-test=search]")
    }
}
export default FindVehiclePage