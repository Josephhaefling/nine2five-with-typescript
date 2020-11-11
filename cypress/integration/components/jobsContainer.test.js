describe("jobsContainer", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("should display the jobs container", () => {
        cy.get(".job-links").should("be.visible")
    })

    it("should display here's todays jobs", () => {
        cy.get("h2").should("be.visible")
    })

    it("should display the job card", () => {
        cy.get(".job-card").should("be.visible")
        cy.get(".job-time").should("be.visible")
        cy.get(".job-name").should("be.visible")
        cy.get(".job-address").should("be.visible")
        cy.get(".city-state").should("be.visible")
        cy.get(".contact-person").should("be.visible")
        cy.get(".bathroom-info").should("be.visible")
        cy.get(".breakroom-info").should("be.visible")
        cy.get(".job-cost").should("be.visible")
    })
})