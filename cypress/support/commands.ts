// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Add Testing Library Commands
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('visitWebsite', (url) => {
    cy.visit(url);

    // cy.screenshot();

    cy.wait(2000);
});

Cypress.Commands.add('acceptCookies', () => {
    cy.get('cmm-cookie-banner' || 'cmm-cookie-banner-content')
        .find('button')
        .contains('Agree to all')
        .click({ force: true });
});

Cypress.Commands.add('openOurCars', () => {
    cy.get('owc-header').find('button').contains('Our Cars').click();

    // cy.screenshot();

    cy.wait(1000);
});

Cypress.Commands.add('selectBodyType', (bodyType) => {
    cy.get('owc-header').find('div').contains('a', bodyType).click();

    // cy.screenshot();

    cy.wait(2000);
});

Cypress.Commands.add('hoverModel', (carModel) => {
    cy.get('dh-io-vmos > div')
        .find('div')
        .contains('span', carModel)
        .trigger('mouseover');

    // cy.screenshot();

    cy.wait(1000);
});

Cypress.Commands.add('buildYourCar', () => {
    cy.get('wb-popover')
        .find('a')
        .contains('Build your car')
        .should(($a) => {
            expect($a.attr('target'), 'target').to.equal('_top');
            $a.attr('target', '_self');
        })
        .click();

    // cy.screenshot();
});

Cypress.Commands.add('acceptCookies2', () => {
    cy.wait(1000);

    cy.get('cmm-cookie-banner' || 'cmm-cookie-banner-content')
        .find('button')
        .contains('Agree to all')
        .click({ force: true });

    cy.wait(2000);

    cy.get('body').then(($body) => {
        if ($body.find('owcc-car-configurator').length > 0) {
            cy.get('owcc-car-configurator')
                .find('button')
                .contains('Agree to all')
                .click({ force: true });
        }
    });

    cy.wait(2000);
});

Cypress.Commands.add('filterFuelType', (fuelType) => {
    cy.get(`[aria-labelledby="${fuelType}"]`).check({ force: true });
});

Cypress.Commands.add('returnPrice', (lowestPrice, highestPrice) => {
    var priceArr = [];

    cy.get('.cc-motorization-header__price')
        .each(($price) => {
            var priceFormated = parseInt(
                $price.text().match(/[0-9]/g).join('')
            );

            if (priceFormated > lowestPrice && priceFormated < highestPrice) {
                priceArr.push(priceFormated);
            }
        })
        .writeFile('price.txt', priceArr);
    // .writeFile('price.txt', {
    //     LowestPrice: `£ ${Math.min(...priceArr)}`,
    //     HightestPrice: `£ ${Math.max(...priceArr)}`,
    // });

    cy.screenshot();
});
