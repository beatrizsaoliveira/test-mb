/// <reference path="../support/index.d.ts" />

describe('Mercedes-Benz Tests', () => {
    const url = 'https://www.mercedes-benz.co.uk',
        bodyType = 'Hatchbacks',
        carModel = 'A-Class',
        fuelType = 'Diesel',
        lowestPrice = 15000,
        highestPrice = 60000;

    it('should go to Website Home Page', () => {
        cy.visitWebsite(url);
    });

    it('should accept all cookies', () => {
        cy.acceptCookies();
    });

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('AWSALB', 'AWSALBCORS', 'AKA_A2');
    });

    it('should open our cars menu', () => {
        cy.openOurCars();
    });

    it('should select a body type', () => {
        cy.selectBodyType(bodyType);
    });

    it('should accept all cookies', () => {
        cy.acceptCookies();
    });

    it('should hover on our car models', () => {
        cy.hoverModel(carModel);
    });

    it('should select build your car', () => {
        cy.buildYourCar();
    });

    it('should accept all cookies 2x', () => {
        cy.acceptCookies2();
    });

    it('should filter fuel type', () => {
        cy.filterFuelType(fuelType);
    });

    it('should return the car price', () => {
        cy.returnPrice(lowestPrice, highestPrice);
    });
});

//wb-type-copy-strong cc-motorization-header__price cc-text ng-star-inserted
