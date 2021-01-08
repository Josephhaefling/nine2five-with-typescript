import React, { useState, FC } from "react"
import "../JobsContainer/JobsContainer.css"
import { Link } from 'react-router-dom'
import { jobsContainer, BathroomInfo, Job, ContactPerson, Location, Street } from "../home-data"
import { JsxEmit } from "typescript"

const JobsContainer: FC <jobsContainer> = (props) : JSX.Element => {
        
    const getJobObjects = (currentUserJobs : Job[]) => {
        
        return currentUserJobs.map((job : Job) => {
            
            const { businessName, bathroomInfo, breakroomInfo, contactPerson, jobId, time, cost, location } = job
            const { numBathrooms, toiletsPerBathroom, sinksPerBathroom} = bathroomInfo
            const { first, last } = contactPerson    
            const { city, postcode, street } = location     
            const { number, name } = street   
            
                return (
                    <Link
                        className="job-links"
                        to={ `/${businessName}-${jobId}` }
                        key={ jobId }
                        style={{ textDecoration: 'none' }}
                        onClick={(e) => props.setCurrentJob(job)}
                    >
                        <section 
                            className='job-card'
                            id={jobId}
                            key={ jobId }
                        >
                            <p className="job-time">{ time }</p>
                            <h3 className="job-name">{ businessName }</h3>
                            <h3 className="job-address">{number} {name}</h3>
                            <h3 className="city-state">{city} {postcode}</h3>
                            <h5 className="contact-person">{`${first} ${last}`}</h5>
                            <p className="bathroom-info">{ numBathrooms } bathrooms with { toiletsPerBathroom } toilets and { sinksPerBathroom } sinks. </p>
                            <p className="breakroom-info">{ breakroomInfo } breakrooms.</p>
                            <p className="job-cost">${ cost }</p>
                        </section>
                    </Link>
                )
        })
    }

    const jobs = getJobObjects(props.currentUserJobs)
    

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