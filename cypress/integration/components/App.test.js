describe("App", () => {

    beforeEach(() => {
    cy.visit('/')
  })

    it("should display the header" , () => {
        cy.get(".nav-bar").should("be.visible")
    })

    it("it should display jobs", () => {
        cy.get(".job-links").should("be.visible")
    })

    it("should display the main page", () => {
        cy.get(".main-page").should("be.visible")
    })

    it("should display the user info section", () => {
        cy.get(".userInfo-section").should("be.visible")
    })

    it("should display the user greeting", () => {
        cy.get(".user-greeting").should("be.visible")
    })
})