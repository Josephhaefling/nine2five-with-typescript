import React, { Attributes, MouseEvent, SyntheticEvent, FC } from "react"
import "../JobPage/JobPage.css"
import { Bathroom, Job, ContactPerson, Location, Street, PersonImage, Props, jobPage } from "../home-data"
// import finishJob from "../assets/favorited.png"
import * as notStarted from "../home-data"
// import jobIsStarted from "../assets/timerStarted.png"
// import started from '../assets/timerStarted.png'

// declare namespace JSX {
//   interface ElementAttributesProperty {
//     disabled: { jobIsStarted: string };
//   }
// }

const JobPage : FC <jobPage> = (props) : JSX.Element => {
        console.log("I ran");

    const { jobId, availableJobs } : Props = props 
    const currentJob = availableJobs && availableJobs.find(job => job.jobId === jobId)
    console.log(currentJob);
    
    const { businessName, bathroomInfo, breakroomInfo, contactPerson, location, phone, personImage, cost } : any = currentJob
    const { first, last } = contactPerson
    const { numBathrooms, toiletsPerBathroom, sinksPerBathroom } = bathroomInfo
    const { city, postcode, street } = location
    const { number, name } = street
    const { large } = personImage
    

    return (
        <section className="job-info-page">
            <section className="current-job-card">
                <section className="image-container">
                    <img className="contact-image" src={ large } alt="contact person" />
                </section>
                <h3 className="contact-name">{ first } { last }</h3>
                <p className="contact-name">{ phone }</p>
                <h4 className="street-address">{ name } { number }</h4>
                <h4 className="address">{ city }, CO { postcode  }</h4>
                <p>{ numBathrooms } bathrooms with { toiletsPerBathroom } toilets and { sinksPerBathroom } sinks. </p>
                <p>{ breakroomInfo } breakrooms.</p>
                <p>${ cost }</p>
                <img 
                    alt="start job" 
                    src={ notStarted }
                    data-testid="start-job"
                    // disabled={ jobIsStarted } 
                    className="start-job-btn" 
                    // onClick={(event : SyntheticEvent) => {
                        // console.log(event.target.src);
                        // const { src } : Attributes = event.target 
                                            
                    // event.target.src = started 
                    // setStartTime(moment().format("hh:mm:ss a"))
                    // setJobIsStarted(true)
                // } 
                />
            </section>
        </section>
    )
}
    
export default JobPage