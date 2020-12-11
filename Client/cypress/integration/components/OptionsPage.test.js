describe("OptionsPage", () => {
    
    beforeEach(() => {
        cy.visit("/")
    })

    it("should display the options page", () => {
        cy.get(".options-button").click()
        cy.contains("Completed Jobs").should("be.visible")
        cy.contains("Make Schedule").should("be.visible")
        cy.contains("Favorite Jobs").should("be.visible")
        cy.get("P").should("be.visible")
    })
})