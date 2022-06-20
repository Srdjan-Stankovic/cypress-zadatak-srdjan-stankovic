/// <reference types="Cypress" />

const { loginPage } = require("../page_objects/loginPage");

describe('creating new board', () => {

    let validEmail = 'cypress@test.com'
    let validPassword = 'Test1234'

    beforeEach('login', () =>{
        cy.visit('/login');
        loginPage.login(validEmail, validPassword);
    })

    it('create new board', () => {
        cy.get('li[class = "vs-c-my-organization__board"]').click()
        cy.get('input[name = "name"]').type('Srdjan123')
        cy.get('button').last().click()
        cy.get('.vs-c-radio-check').eq(0).click()
        cy.get('button').last().click()
        cy.get('button').last().click()
        cy.get('button').last().click()
    })
})