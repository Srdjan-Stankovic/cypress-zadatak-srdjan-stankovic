class LoginPage {

    get emailInput() {
        return cy.get('input[name="email"]');
    }

    get passwordInput() {
        return cy.get('input[name="password"]').eq(0);
    }

    get loginBtn() {
        return cy.get('button').eq(0);
    }

    get newOrgTitle() {
        return cy.get('h2');
    }

    login(email, password) {
       this.emailInput.type(email)
       this.passwordInput.type(password)
       this.loginBtn.click()
    }
}

export const loginPage = new LoginPage();