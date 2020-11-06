import React, { FC } from "react"
import { completedJobPage, Job } from "../home-data"

const CompletedJobPage : FC <completedJobPage> = (props) : JSX.Element => { 
    console.log("props", props.completedJobs);
       
    
    const getCompletedJobs = (completedJobs : Job[]) => {
        
        return completedJobs.length > 0 && completedJobs.map((job : Job) => {
            const { businessName, bathroomInfo, breakroomInfo, contactPerson, jobId, time, cost, location } = job
            const { numBathrooms, toiletsPerBathroom, sinksPerBathroom} = bathroomInfo
            const { first, last } = contactPerson    
            const { city, postcode, street } = location     
            const { number, name } = street   
            return (
            <section 
                className='job-card'
                id={jobId}
                key={ jobId }
            >
                <p>{ time }</p>
                <h3>{ businessName }</h3>
                <h3>{ number } { name }</h3>
                <h3>{ city } { postcode }</h3>
                <h5>{ `${first} ${last}` }</h5>
                <p>{ numBathrooms } bathrooms with { toiletsPerBathroom } toilets and { sinksPerBathroom } sinks. </p>
                <p>{ breakroomInfo } breakrooms.</p>
                <p>${ cost }</p>
            </section>
        )
    })
}      
    const completedJobsXML = getCompletedJobs(props.completedJobs)
    console.log("completed jobs XML:", completedJobsXML);
    

    return (    
        <section>{ completedJobsXML }</section>
    )
}

export default CompletedJobPage