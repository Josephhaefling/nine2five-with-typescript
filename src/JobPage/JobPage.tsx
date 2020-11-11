import React, { FC, useState } from "react"
import { Link } from 'react-router-dom'
import { isJsxAttribute, isJsxElement, JsxAttribute, JsxElement, JsxEmit, updateJsxAttributes } from "typescript"
import { Bathroom, Job, ContactPerson, Location, Street, PersonImage, Props, jobPage, noJobSelected } from "../home-data"
import "../JobPage/JobPage.css"
import moment from 'moment'

const favorite = require("../assets/favorited.png")
const notFavorite = require("../assets/notFavorited.png")
const started = require("../assets/finish-flag.png")
const notStarted = require("../assets/stopwatch.png")

const JobPage : FC <jobPage> = (props) : JSX.Element => {
    
    
    const [ jobStarted, setJobStarted] = useState <boolean> (false)
    const [ startTime, setStartTime ] = useState <string> ("")
    const [ isFavorite, setIsFavorite ] = useState <boolean> (false)
    
    const { availableJobs, jobId, currentJob, favoriteJobs, setFavoriteJobs } : Props = props 
    const { businessName, bathroomInfo, breakroomInfo, contactPerson, location, phone, personImage, cost } : Job | noJobSelected = currentJob 
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
                    <Link
                        to={ `rate-job-form${jobId}` }
                        key={jobId}
                        style={{ textDecoration: 'none' }}
                        onClick={ e => {   
                                if(!jobStarted) {
                                    e.preventDefault()
                                    setJobStarted(!jobStarted) 
                                    setStartTime(moment().format("hh:mm:ss a"))                                    
                                    } 
                                }
                            }    
                    >

                        <img 
                            alt="start job button" 
                            src={ jobStarted ? started : notStarted }
                            className="job-button" 
                            
                        />
                    </Link>
                        <img 
                            className="job-button"
                            src={ isFavorite ? favorite : notFavorite }
                            alt="finish job button"
                            onClick={ (e) => { 
                                const newFavorites = isFavorite && props.favoriteJobs.filter((job : Job) => job.jobId !== currentJob.jobId)
                                isFavorite ? setIsFavorite(!isFavorite) : setIsFavorite(!isFavorite)
                                isFavorite ?  props.setFavoriteJobs(newFavorites): props.setFavoriteJobs([...props.favoriteJobs, currentJob])
                            }
                         }
                            />
                </section>
            </section>
        </section>
    )
}
    
export default JobPage