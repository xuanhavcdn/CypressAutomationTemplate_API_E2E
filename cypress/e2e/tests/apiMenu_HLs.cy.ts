import apiMenu_HLs from "../pages/apiMenu.HLs";
import Ajv from "ajv";
const ajv = new Ajv();
const apiMenu_HLs_data = require("../../fixtures/apiMenu_HLs")
const accessToken_data = require("../../fixtures/accessToken")
const responseSchema = require("../../fixtures/menuResponseSchema")
describe("Test api for Menu", () => {
    const AccessTokenGlobal = Cypress.env("accessToken")
    it("Get Menu successfully", () => {
        cy.request({
            method: "GET",
            url: apiMenu_HLs.url,
            headers:{
                Authorization: `Bearer ${accessToken_data.accessToken}`
            },
            qs:{
                language: "vi"
            }
        }).then((response) => {
            //assert status response
            expect(response.status).eq(200)

            //assert number of category response
            // cy.log(response.body.MenusItem[0].Item)
            let count_category_item = (response.body.MenusItem[0].Item).length
            expect(count_category_item).eq(apiMenu_HLs.category.length)
            //assert list category
            // cy.log(count_category_item)
            for (let i = 0; i< count_category_item;i++){
                // cy.log(response.body.MenusItem[0].Item[i].Title)
                expect(response.body.MenusItem[0].Item[i].Title).eq(apiMenu_HLs.category[i])
            }
            const isValidResponse = ajv.validate(responseSchema, response.body);
            // Assert that the response matches the schema
            expect(isValidResponse, ajv.errorsText(ajv.errors)).to.be.true;
        })
    })
    it("Verity status code 401 is repsonse when authentication is incorrect or expired", () => {
        cy.request({
            method: "GET",
            url: apiMenu_HLs.url,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).eq(401)
        })
    })
})