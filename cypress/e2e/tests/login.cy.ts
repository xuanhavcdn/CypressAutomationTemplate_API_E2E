import LoginPage from "../pages/loginPage";

const logindata = require("../../fixtures/login")

describe("Login test", ()=> {
    beforeEach("Open the login website", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false;
        });
        cy.visit("/login")
        cy.wait(2000) //implicit wait
        cy.get(LoginPage.userForm).should("be.visible")
    })
    it("TC1: Login success with correct username and password with css selector", () => {
        cy.get(LoginPage.userNameField).clear().type(logindata.userName)
        cy.get(LoginPage.passWordField).clear().type(logindata.passWord)
        cy.get(LoginPage.loginBtn).click()
        cy.get(LoginPage.usernameLabel, {timeout: 5000}).should("be.visible") //explicit wait
    })

    it("TC2: Login success with correct username and password with xpath", () => {
        cy.xpath(LoginPage.userNameFieldXpath).clear().type(logindata.userName)
        cy.xpath(LoginPage.passWordFieldXpath).clear().type(logindata.passWord)
        cy.xpath(LoginPage.loginBtnXpath).click()
        cy.xpath(LoginPage.usernameLabelXpath, {timeout: 5000}).should("be.visible") //explicit wait
    })
})