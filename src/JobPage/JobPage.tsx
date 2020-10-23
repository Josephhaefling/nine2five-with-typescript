import React from "react"

interface jobPage {
    availableJobs: Job[]
    jobId: any
}

interface Job {
    employeeId: number
    bathroomInfo: Bathroom
    breakroomInfo: number
    businessName: string
    contactPerson: ContactPerson
    jobDate: string
    jobId: string
    location: Location
    phone: string
    personImage: PersonImage
}

interface Bathroom {
    numBathrooms: number
    toiletsPerBathroom: number
    sinksPerBathroom: number
}

interface ContactPerson {
    first: string
    last: string
}

interface Location {
    city: string
    postcode: number
    street: Street
}

interface Street {
    number: number
    name: string
}

interface PersonImage {
    large: string
}

interface Props {
    jobId: string
    availableJobs: Job[]
}

const JobPage : React.FC <jobPage> = (props) : JSX.Element => {
        console.log("I ran");

    const { jobId, availableJobs } : Props = props 
    const currentJob = availableJobs && availableJobs.find(job => job.jobId === jobId)
    console.log(currentJob);
    
    const { businessName, bathroomInfo, breakroomInfo, contactPerson, location, phone, personImage } : any = currentJob
    const { first, last } = contactPerson && contactPerson
    const { large } = personImage && personImage
    

    return (
        <section>
            <img src={ large } alt="contact person" />
            <h3>{ first } { last }</h3>
        </section>
    )
}
    
export default JobPage