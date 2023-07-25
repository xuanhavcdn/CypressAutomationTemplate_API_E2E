import posLoginPage from "../pages/posPage"

const posLoginPagedata = require("../../fixtures/login")

describe("Test POS login", () => {
    beforeEach("Open POS page", () => {
        cy.visit("/")
        //fluent wait
        cy.get(posLoginPage.loginPage, {timeout: 5000}).should("be.visible")
    })
    it("TC1: Login success with correct username and password (implicit wait)", () => {
        cy.get(posLoginPage.username).clear().type(posLoginPagedata.userName)
        cy.get(posLoginPage.password).clear().type(posLoginPagedata.passWord)
        cy.get(posLoginPage.loginBtn).click()
        //implicit wait
        cy.wait(1000)
    })
    it("TC2: Login success with correct username and password (explicit wait)", () => {
        cy.get(posLoginPage.username).clear().type(posLoginPagedata.userName)
        cy.get(posLoginPage.password).clear().type(posLoginPagedata.passWord)
        cy.get(posLoginPage.loginBtn).click()
        //explicit wait
        cy.get(posLoginPage.accountName).should("be.visible")
    })
})