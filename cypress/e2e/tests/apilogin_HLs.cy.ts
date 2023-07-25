import apiLoginPage_HLs from "../pages/apiLoginPage_HLs";

const apilogin_HLs_data = require("../../fixtures/apilogin_HLs")


describe("Route api", () => {
    let routeAuthen = ""
    let accessToken = ""
    it("Api token route", () => {
        cy.request({
            method: "POST",
            url: apiLoginPage_HLs.rountUrl,
            body: {
                DeviceCode: apilogin_HLs_data.DeviceCode
            }
        }).then((response) => {
            routeAuthen = response.body.AccessToken
            expect(response.status).eq(200)
        })
    })
    it("Verify user able to login success with correct username and password", () => {
        cy.request({
            method: "POST",
            url: apiLoginPage_HLs.loginUrl,
            body: {
                UserAccount: apilogin_HLs_data.UserAccount,
                Password: apilogin_HLs_data.Password
            },
            headers:{
                Authorization: "Bearer " + routeAuthen
            }
        }).then((response) => {
            expect(response.status).eq(200)
            accessToken = response.body.AccessToken
            cy.writeFile("cypress/fixtures/accessToken.json", { accessToken })
        })
    })
})