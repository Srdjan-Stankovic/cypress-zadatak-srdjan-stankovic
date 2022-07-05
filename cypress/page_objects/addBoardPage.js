class AddBoardPage {
    
    get addBoardBtn() {
        return cy.get('.vs-c-my-organization__board').last();
    }

    get titleInput() {
        return cy.get('input[name = "name"]');
    }

    get cancelBtn() {
        return cy.get('.el-button').first();
    }

    get nextBtn() {
        return cy.get('.el-button').last();
    }

    get radioBtnScrum() {
        return cy.get('span[name = "type_scrum"]')
    }

    get boardTitleHeading() {
        return cy.get('.vs-c-modal__title').children().eq(1);
    }

    get backlogTitle() {
        return cy.get('h2').first();
    }

    get backlogBackgroundBox() {
        return cy.get('.vs-c-col__head');
    }

    get settingsBtn() {
        return cy.get('a[class = "vs-c-site-logo"]').last();
    }

    get deleteBtn () {
        return cy.get('button[class = "vs-c-btn vs-c-btn--warning vs-c-btn--spaced"]');
    }

    get deleteYesBtn() {
        return cy.get('button[class = "el-button el-button--success el-button"]');
    }
}

export const addBoardPage = new AddBoardPage();