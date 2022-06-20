/// <reference types="Cypress" />

import {loginPage} from '../page_objects/loginPage';

describe('login POM', () => {

    let validEmail = 'cypress@test.com'
    let validPassword = 'Test1234'

    beforeEach('visit login page', () => {
        cy.visit('/login');
        cy.url().should('include', '/login');
    })

    it('valid login', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
        }).as('validLogin')

        cy.url().should('include', '/login');
        loginPage.login(validEmail, validPassword);
        cy.wait('@validLogin').then(interception => {
            expect(interception.response.statusCode).to.exist
            expect(interception.response.statusCode).eq(200)
        })

        cy.url().should('not.include', '/login');
        loginPage.newOrgTitle.should('be.visible')
            .and('have.text', 'Add new Organization');

    })

})
