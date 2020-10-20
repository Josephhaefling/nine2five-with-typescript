import React, { useState } from "react"
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

const JobsContainer: React.FC <jobsContainer> = (props) : JSX.Element => {
    
    const [ currentUsersJobs, setCurrentUsersJobs ] = useState <Job[]> ([])
    const { availableJobs, userId, } =props
    
    const getUsersJobs = (jobsList : object[], id : number) => {        
        const usersJobs = availableJobs.filter((job : Job) => job.employeeId === id)  
        return usersJobs
        }
    

    const getJobObjects = () => {
        const usersJobs = getUsersJobs(availableJobs, userId)
        return usersJobs.map(job => {
            const { businessName, bathroomInfo, breakroomInfo, contactPerson, jobId } = job
            const { numBathrooms, toiletsPerBathroom, sinksPerBathroom} = bathroomInfo
            const { first, last } = contactPerson
            
            if(job.employeeId === userId ) {                
                return (
                    <Link
                        className="job-links"
                        to={ `/${businessName}1` }
                        style={{ textDecoration: 'none' }}
                        key={ jobId }
                    >
                        <section 
                            className='job-card'
                            key={ jobId }
                        >
                            <h3>{ businessName }</h3>
                            <h5>{`${first} ${last}`}</h5>
                            <p>Num Bathrooms: { numBathrooms }</p>
                            <p>Toilets Per Bathroom: { toiletsPerBathroom }</p>
                            <p>Sinks Per Bathroom: { sinksPerBathroom }</p>
                            <p>Num Breakrooms: { breakroomInfo }</p>
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