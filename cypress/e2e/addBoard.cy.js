/// <reference types="Cypress" />

const { loginPage } = require("../page_objects/loginPage");
const { addBoardPage } = require("../page_objects/addBoardPage");
const faker = require('@faker-js/faker');


describe('creating new board', () => {

    let boardId;
    let validEmail = 'cypress@test.com'
    let validPassword = 'Test1234'
    const boardTitle = faker.name.lastName()

    before('login', () =>{
        cy.loginViaBackend();
        cy.visit('/my-organizations')
    })



    it('adding a new board', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards'
        }).as('newBoard')

        addBoardPage.addBoardBtn.click();
        addBoardPage.titleInput.type(boardTitle);
        addBoardPage.nextBtn.click();
        addBoardPage.radioBtnScrum.click();
        addBoardPage.nextBtn.click();
        addBoardPage.nextBtn.click();
        addBoardPage.boardTitleHeading.should('have.text', boardTitle);
        addBoardPage.nextBtn.click();
        cy.wait('@newBoard').then(interception => {
            boardId = interception.response.body.id
            
            expect(interception.response.statusCode).to.exist
            expect(interception.response.statusCode).eq(201)
        })
        cy.url().should('contains', 'boards/');
        addBoardPage.backlogTitle.should('have.text', 'Backlog')
        addBoardPage.backlogBackgroundBox.should('have.css', 'background-color', 'rgb(254, 87, 35)')
    })

    it('delete previously created board', () => {
        cy.intercept({
            method: 'DELETE',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards/' + boardId
        }).as('deleteBoard')

        addBoardPage.settingsBtn.click();
        cy.url().should('contain', '/settings');
        addBoardPage.deleteBtn.click();
        addBoardPage.deleteYesBtn.click();
        cy.wait('@deleteBoard').then(interception => {
            expect(interception.response.statusCode).to.exist
            expect(interception.response.statusCode).eq(200)
        })
        cy.url().should('contain', '/boards');
    })
    
})