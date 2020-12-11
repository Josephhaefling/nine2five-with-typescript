const { createYield } = require("typescript")

describe("header", () => {
    
    beforeEach(() => {
    cy.visit('/')
  })

    it("should display the header", () => {
        cy.get(".nav-bar").should("be.visible")
    })

    it("should show the nine2five logo", () => {
        cy.get("h1").should("be.visible")
    })
    
    it("should display the options button", () => {
        cy.get(".options-button").should("be.visible")
    })

    it("should display the home button on click", () => {
        cy.get(".options-button").click()
        cy.get(".options-button").should("be.visible")
    })

    it("should display the options button on click", () => {
        cy.contains("Options").click()
        cy.contains("Home").click()
        cy.contains("Options").should("be.visible")
    })
})