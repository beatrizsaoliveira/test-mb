// load type definitions from Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to visit Mercedes-Benz website
         * @example cy.visitWebsite()
         */

        visitWebsite(url: string): Chainable<Window>;

        /**
         * Custom command to accept cookies
         * @example cy.acceptCookies()
         */

        acceptCookies(): Chainable<Element>;

        /**
         * Custom command to open Our Cars Menu
         * @example cy.openOurCars()
         */

        openOurCars(): Chainable<Element>;

        /**
         * Custom commands to select Body Type
         * @example cy.selectBodyType()
         */

        selectBodyType(bodyType: string): Chainable<Element>;

        /**
         * Custom commands to hover on car model
         * @example cy.hoverModel()
         */

        hoverModel(carModel: string): Chainable<Element>;

        /**
         * Custom commands to select build your car
         * @example cy.buildYourCar()
         */

        buildYourCar(): Chainable<Element>;

        /**
         * Custom command to accept cookies inside two shadow wrapper
         * @example cy.acceptCookies2()
         */

        acceptCookies2(): Chainable<Element>;

        /**
         * Custom commands to filter fuel type
         * @example cy.filterFuelType()
         */

        filterFuelType(fuelType: string): Chainable<Element>;

        /**
         * Custom commands to return the price
         * @example cy.returnPrice()
         */

        returnPrice(
            lowestPrice: Number,
            highestPrice: Number
        ): Chainable<Element>;
    }
}
