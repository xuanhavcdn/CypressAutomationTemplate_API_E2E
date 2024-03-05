import LoginPage from "../../pages/loginPage";

const logindata = require("../../../fixtures/login")

describe("Login test", ()=> {
    beforeEach("Open the website", () => {
        cy.visit("/")
        cy.wait(5000)
        cy.get(LoginPage.acceptIntroductionBtn).click()
    })

    it("TC1: Login success with correct username and password with css selector", () => {
        cy.get(LoginPage.loginOptionBtn).click()
        cy.get(LoginPage.userName).clear().type(logindata.userName)
        cy.get(LoginPage.passWord).clear().type(logindata.passWord)
        cy.get(LoginPage.loginBtn).click()
        cy.get(LoginPage.myAccountIcon).should("be.visible")
    })
    it("TC2: Login success with correct username and password with xpath", () => {
        cy.get(LoginPage.loginOptionBtn).click()
        cy.get(LoginPage.userName).clear().type(logindata.userName)
        cy.get(LoginPage.passWord).clear().type(logindata.passWord)
        cy.xpath(LoginPage.loginBtn_Xpath).click()
        cy.get(LoginPage.myAccountIcon).should("be.visible")
    })
})