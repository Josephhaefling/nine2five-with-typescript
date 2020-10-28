import React, { Attributes, MouseEvent, SyntheticEvent, FC } from "react"
import { JsxEmit } from "typescript"
import { Bathroom, Job, ContactPerson, Location, Street, PersonImage, Props, jobPage } from "../home-data"
import "../JobPage/JobPage.css"
const finishJob = require("../assets/favorited.png")
const jobIsStarted = require("../assets/timerStarted.png")
const started = require("../assets/timerStarted.png")
const notStarted = require("../assets/stopwatch.png")

// declare namespace JSX {
    //   interface ElementAttributesProperty {
        //     disabled: { jobIsStarted: string };
        //   }
        // }
        
// import notStarted from "../assets/stopwatch.png"


const JobPage : FC <jobPage> = (props) : JSX.Element => {
    const { jobId, availableJobs } : Props = props 
    const currentJob = availableJobs && availableJobs.find(job => job.jobId === jobId)    
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
                <section className="button-container">

                    <img 
                        alt="start job button" 
                        src={ notStarted }
                        disabled={ jobIsStarted } 
                        className="job-button" 
                    // onClick={(event : SyntheticEvent) => {
                        // console.log(event.target.src);
                        // const { src } : Attributes = event.target 
                        
                        // event.target.src = started 
                        // setStartTime(moment().format("hh:mm:ss a"))
                        // setJobIsStarted(true)
                        // } 
                        />
                        <img 
                            className="job-button"
                            src={ finishJob }
                            alt="finish job button"
                        />
                </section>
            </section>
        </section>
    )
}
    
export default JobPage