import apiLoginPage from "../pages/apiLoginPage";

describe("Api testing", () => {
    it("TC1: Get list user success", () => {
        cy.request({
            method: "GET",
            url: apiLoginPage.getUser,
        }).then((response) => {
            expect(response.status).to.eq(200)
            const responseBodyString = JSON.stringify(response.body, null, 2); // Convert to formatted JSON string
            cy.log(responseBodyString);
        })
    })
})