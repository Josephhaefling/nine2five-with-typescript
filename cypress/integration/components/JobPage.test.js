import React from "react"
import { mount } from 'cypress-react-unit-test';
import JobPageElement from "../../../src/JobPage/JobPage"

describe("JobPage", () => {
    let availableJobsList = [{
        jobId: "3",
        businessName: "Joe's Bar n Grill", 
        bathroomInfo: { numBathrooms: 1, toiletsPerBathroom: 1, sinksPerBathroom: 1 },
        breakroomInfo: 1,
        contactPerson: { firstName: "Karen", lastName: "McNormy" },
        location: { city: "Denver", postCode: "80229", steet: {number: 1, street: "Some St"} },
        phone: "555-555-5555", 
        personImage: "url",
        cost: 40
    }]
    let jobId = "3"
    let currentJob = {
        jobId: 3,
        businessName: "Joe's Bar n Grill", 
        bathroomInfo: { numBathrooms: 1, toiletsPerBathroom: 1, sinksPerBathroom: 1 },
        breakroomInfo: 1,
        contactPerson: { firstName: "Karen", lastName: "McNormy" },
        location: { city: "Denver", postCode: "80229", steet: {number: 1, street: "Some St"} },
        phone: "555-555-5555", 
        personImage: "url",
        cost: 40
    }
    let favoriteJobs = [{
        jobId: "3",
        businessName: "Joe's Bar n Grill", 
        bathroomInfo: { numBathrooms: 1, toiletsPerBathroom: 1, sinksPerBathroom: 1 },
        breakroomInfo: 1,
        contactPerson: { firstName: "Karen", lastName: "McNormy" },
        location: { city: "Denver", postCode: "80229", steet: {number: 1, street: "Some St"} },
        phone: "555-555-5555", 
        personImage: "url",
        cost: 40
    }]
    let setFavoriteJobs = [{
        jobId: "3",
        businessName: "Joe's Bar n Grill", 
        bathroomInfo: { numBathrooms: 1, toiletsPerBathroom: 1, sinksPerBathroom: 1 },
        breakroomInfo: 1,
        contactPerson: { firstName: "Karen", lastName: "McNormy" },
        location: { city: "Denver", postCode: "80229", steet: {number: 1, street: "Some St"} },
        phone: "555-555-5555", 
        personImage: "url",
        cost: 40
    }]

    beforeEach(() => {
        mount(
            <JobPageElement 
                availableJobs={ availableJobsList } 
                jobId={ jobId } 
                currentJob={ currentJob } 
                favoriteJobs={ favoriteJobs } 
                setFavoriteJobs={ setFavoriteJobs }
            />
        )
    })

    it("should display the job page", () => {
        cy.get(".job-info-page").should("be.visible")
    })
})