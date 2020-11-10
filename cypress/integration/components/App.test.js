describe("App", () => {

    beforeEach(() => {
    cy.visit('/')
  })
  
    it("should display the header" , () => {
        cy.get(".nav-bar")
    })
})