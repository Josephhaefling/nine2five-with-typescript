describe("JobPage", () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it("should display the job page", () => {
        cy.get(".todays-jobs").within(() => {
            cy.get(".job-links:eq(0)").click()
        })
        cy.get(".current-job-card").should("be.visible")
        cy.get(".image-container").should("be.visible")
        cy.get(".contact-image").should("be.visible")
        cy.get(".contact-name").should("be.visible")
        cy.get(".contact-phone").should("be.visible")
        cy.get(".street-address").should("be.visible")
        cy.get(".address").should("be.visible")
        cy.get(".bathroom-info").should("be.visible")
        cy.get(".breakroom-info").should("be.visible")
        cy.get(".cost").should("be.visible")
        cy.get(".button-container").should("be.visible")
        cy.get(".job-button:eq(0)").should("be.visible")
        // cy.get('[src*="../assets/stopwatch.png"]').should("be.visible")
        cy.get(".job-button:eq(1)").should("be.visible")
    })
})


    