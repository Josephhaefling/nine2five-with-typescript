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

    it("should display the options page when the options button is clicked", () => {
        cy.get(".options-button").click()
        cy.get(".nav-bar").should("be.visible")
        cy.contains("Completed Jobs").should("be.visible")
        cy.contains("Make Schedule").should("be.visible")
        cy.contains("Favorite Jobs").should("be.visible")
        cy.get(".user-greeting")
    })

    it("should display the home page when the options button is clicked", () => {
        cy.get(".options-button").click()
        cy.location().should((location) => {
            expect(location.pathname).to.eq("/options-page")
        })
        cy.get(".nav-bar").should("be.visible")
        cy.contains("Completed Jobs").should("be.visible")
        cy.contains("Make Schedule").should("be.visible")
        cy.contains("Favorite Jobs").should("be.visible")
        cy.get(".user-greeting").should("be.visible")
        cy.get(".options-button").click()
        cy.location().should((location) => {
            expect(location.pathname).to.eq("/")
        })
    })

    it("should display the jobPage when job is clicked", () => {
        cy.get(".job-card:eq(0)").click()
        cy.get(".current-job-card").should("be.visible")
        cy.location().should((location) => {
            expect(location.pathname).to.eq("/")
        })
    })
})