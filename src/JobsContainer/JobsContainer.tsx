import React, { useState, FC } from "react"
import "../JobsContainer/JobsContainer.css"
import { Link } from 'react-router-dom'


interface jobsContainer {
    availableJobs: Job[]
    userId: number
}

interface Job {
    employeeId: number
    bathroomInfo: BathroomInfo
    breakroomInfo: number
    businessName: string
    contactPerson: ContactPerson
    jobDate: string
    jobId: string
    time: string
    cost: string
    location: Location
}

interface BathroomInfo {
    numBathrooms: number
    toiletsPerBathroom: number
    sinksPerBathroom: number
}

interface ContactPerson {
    title: string
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

const JobsContainer: FC <jobsContainer> = (props) : JSX.Element => {
    
    const [ currentUsersJobs, setCurrentUsersJobs ] = useState <Job[]> ([])
    const { availableJobs, userId, } =props
    
    const getUsersJobs = (jobsList : object[], id : number) : Job[] => {        
        const usersJobs = availableJobs.filter((job : Job) => job.employeeId === id)  
        return usersJobs
        }
    

    const getJobObjects = () => {
        const usersJobs = getUsersJobs(availableJobs, userId)
        return usersJobs.map((job) : JSX.Element | undefined => {
            
            const { businessName, bathroomInfo, breakroomInfo, contactPerson, jobId, time, cost, location } = job
            const { numBathrooms, toiletsPerBathroom, sinksPerBathroom} = bathroomInfo
            const { first, last } = contactPerson    
            const { city, postcode, street } = location     
            const { number, name } = street   
            
            if(job.employeeId === userId ) {                                
                return (
                    <Link
                        className="job-links"
                        to={ `/${businessName}-${jobId}` }
                        key={ jobId }
                        style={{ textDecoration: 'none' }}
                    >
                        <section 
                            className='job-card'
                            id={jobId}
                            key={ jobId }
                        >
                            <p>{ time }</p>
                            <h3>{ businessName }</h3>
                            <h3>{number} {name}</h3>
                            <h3>{city} {postcode}</h3>
                            <h5>{`${first} ${last}`}</h5>
                            <p>{ numBathrooms } bathrooms with { toiletsPerBathroom } toilets and { sinksPerBathroom } sinks. </p>
                            <p>{ breakroomInfo } breakrooms.</p>
                            <p>${ cost }</p>
                        </section>
                    </Link>
                )
            }
        })
    }

    const jobs = getJobObjects()
    

    return (
    <section
        className='todays-jobs-display'
    >
        <h2>Here's todays jobs.</h2>
        <section
            className='todays-jobs'
        >
            { jobs }
        </section>
    </section>
    )
}

export default JobsContainer