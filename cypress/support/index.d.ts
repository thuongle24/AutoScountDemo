declare namespace Cypress {
    interface Chainable<Subject = any> {
      /**
        * @param {bodytype} bodytype Vehicle Body Type.
        * @param {make} make Vehicle Make.
        * @param {make} stregistration Vehicle First Registration.
        * @param {country} country Manufacturer Country.
        * @param {radius} radius Radius.
       * @see https://docs.cypress.io/guides/tooling/typescript-support.html#Types-for-custom-assertions
       * Custom command to select DOM element by data-cy attribute.
       * @example   cy.searchByCaravan(
            'Caravan',
            'Autostar',
            '2016',
            '1500',
            'Germany',
            '200'
        )
      */
     searchByCaravan(bodytype: string, make: string, stregistration: string, price: string, country: string, radius: string): Chainable<Subject>
    }
  }