import apiLoginPage from "../pages/apiLoginPage";

const apilogindata = require("../../fixtures/apilogin")

describe("Api testing", () => {
    it("TC1: Login success and get authenticate value", () => {
        cy.request({
            method: "POST",
            url: apiLoginPage.loginUrl,
            body: {
                username: apilogindata.userName,
                password: apilogindata.passWord,
                type: apilogindata.type
            }
        }).then(function(response) {
            this.getauthen = response.body.data[0].bearerToken
            cy.log(this.getauthen)
        })
    })

    it("TC2: Get api bank list with authenticate value", function() {
        cy.request({
            method: "GET",
            url: apiLoginPage.bankListUrl,
            auth: {
                bearer: this.getauthen
            }
        }).then((response) => {
            expect(response.body.status).to.eq("OK")
        })
    })

    it("TC3: Get api event with authenticate value", function() {
        cy.request({
            method: "GET",
            url: apiLoginPage.sellerUrl,
            auth: {
                bearer: this.getauthen
            }
        }).then((response) => {
            expect(response.body.status).to.eq("OK")
        })
    })

    it("TC4: Get api account me with authenticate value", function() {
        cy.request({
            method: "GET",
            url: apiLoginPage.accountMeUrl,
            auth: {
                bearer: this.getauthen
            }
        }).then((response) => {
            expect(response.body.status).to.eq("OK")
        })
    })

})