describe("UseApp", () => {
    let thing
    beforeEach(() => {
        cy.visit("/")
        cy.server()
        cy.route({
            url: "https://randomuser.me/api/?results=20",
            method: "GET",
            response: {
                status: "Get people",
                code: 201, 
                people: [{
                    cell: "867-922-2170",
                    dob: {date: "1969-12-06T15:32:49.523Z", age: 51},
                    email: "charlie.mackay@example.com",
                    gender: "female",
                    id: {name: "", value: null},
                    location: {street: {name: "York St", number: 3}, city: "Denver", state: "CO", country: "US", postcode: 80202},
                    login: {uuid: "4920abf1-4afd-4811-ba1d-c87e66d1bced", username: "ticklishrabbit585", password: "antoine", salt: "N91FffoN", md5: "fa2d9bdcfa256b365992a72e9b548790"},
                    name: {title: "Miss", first: "Charlie", last: "Mackay"},
                    nat: "CA",
                    phone: "480-779-8128",
                    picture: {large: "https://randomuser.me/api/portraits/women/41.jpg", medium: "https://randomuser.me/api/portraits/med/women/41.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/41.jpg"},
                    registered: {date: "2017-10-06T12:14:42.890Z", age: 3}
                }]
            }
        })
    })

    it("should do something", () => {
        console.log("thiiiiiiiiiiiiing:");
        cy.get(".job-card")
    })
})