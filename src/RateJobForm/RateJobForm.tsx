import React, { FC, useState } from "react"
import { rateJobForm, noJobSelected, Job } from "../home-data"
import { Link } from 'react-router-dom'
import "./RateJobForm.css"

    const RateJobForm : FC <rateJobForm> = (props) : JSX.Element => {
        
        const NoJobSelected : noJobSelected = {
            cost: "",
            employeeId: 0,
            bathroomInfo: { numBathrooms: 0, toiletsPerBathroom: 0, sinksPerBathroom: 0 },
            breakroomInfo: 0,
            businessName: "",
            contactPerson: { last: "", first: ""},
            jobDate: "",
            jobId: "",
            location: { city: "", postcode: 0, street: { number: 0, name: ""}},
            phone: "",
            personImage: { large: ""},
            time: ""
        }
        const [ changedTrash, setChangedTrash ] = useState <string> ("")
        const [ changedToiletPaper, setChangedToiletPaper ] = useState <string> ("")
        const [ refilledHandSoap, setRefilledHandSoap ] = useState <string> ("")
        const [ refilledPaperTowls, setRefilledPaperTowls ] = useState <string> ("")
        const [ cleanedToilets, setCleanedToilets ] = useState <string> ("")
        const [ cleanedSinks, setCleanedSinks ] = useState <string> ("")
        const [ easyToFind, setEasyToFind ] = useState <number> (0)
        const [ staffWasRespectful, setStaffWasRespectful ] = useState <number> (0)
        const [ contactPresent, setContactPresent ] = useState <string> ("")
        const [ wouldYouDoJobAgain, setWouldYouDoJobAgain ] = useState <string> ("")

    return (
        <section className="rate-job-page">
        <form data-testid="rate-business-form">
            <h1 className="name-of-business">{props.currentJob.businessName}</h1>
            <label className="rate-business-questions">
                Did you change the trash?
            </label>
            <section className="question-container">
                <label className="rate-business-btn">
                <input
                    className="answer"
                    type="radio"
                    checked={changedTrash === "Yes"}
                    value='Yes'
                    onChange={(event) => setChangedTrash("Yes")}
                />
                    Yes
                </label>
                <label className="rate-business-btn">
                <input
                    className="answer"
                    type="radio"
                    checked={changedTrash === "No"}
                    value='No'
                    onChange={(event) => setChangedTrash("No")}
                />
                    No
                </label>
            </section>
            <label className="rate-business-questions">
                Did you refill the toilet paper?
            </label>
            <section className="question-container">
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={changedToiletPaper === "Yes"}
                        value='Yes'
                        onChange={(event) => setChangedToiletPaper("Yes")}
                    />
                    Yes
                </label>
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={changedToiletPaper === "No"}
                        value='No'
                        onChange={(event) => setChangedToiletPaper("No")}
                    />
                    No
                </label>
            </section>
            <label className="rate-business-questions">
                Did you refill the hand soap?
            </label>
            <section className="question-container">
                <label className="rate-business-btn">
                    <input
                        className="answer"
                    type="radio"
                    checked={refilledHandSoap === "Yes"}
                    value='Yes'
                    onChange={(event) => setRefilledHandSoap("Yes")}
                    />
                    Yes
                </label>
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={refilledHandSoap === "No"}
                        value='No'
                        onChange={(event) => setRefilledHandSoap("No")}
                    />
                        No
                </label>
            </section>
            <label className="rate-business-questions">
                Did you refill the paper towels?
            </label>
            <section className="question-container">
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={refilledPaperTowls === "Yes"}
                        value='Yes'
                        onChange={(event) => setRefilledPaperTowls("Yes")}
                    />
                        Yes
                </label>
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={refilledPaperTowls === "No"}
                        value='No'
                        onChange={(event) => setRefilledPaperTowls("No")}
                    />
                        No
                </label>
            </section>
            <label className="rate-business-questions">
                Did you clean all of the toilets?
            </label>
            <section className="question-container">
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={cleanedToilets === "Yes"}
                        value='Yes'
                        onChange={(event) => setCleanedToilets("Yes")}
                    />
                        Yes
                </label>
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={cleanedToilets === "No"}
                        value='No'
                        onChange={(event) => setCleanedToilets("No")}
                    />
                        No
                </label>
            </section>
            <label className="rate-business-questions">
                Did you clean all of the sinks?
            </label>
            <section className="question-container">
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={cleanedSinks === "Yes"}
                        value='Yes'
                        onChange={(event) => setCleanedSinks("Yes")}
                    />    
                        Yes
                </label>
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={cleanedSinks === "No"}
                        value='No'
                        onChange={(event) => setCleanedSinks("No")}
                    />
                        No
                </label>
            </section>
            <label className="rate-business-questions">
                Was job easy to find?
            </label>
            <section className="question-container">
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={easyToFind === 1}
                        value='1'
                        onChange={(event) => setEasyToFind(1)}
                    />
                        1
                </label>
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={easyToFind === 2}
                        value='2'
                        onChange={(event) => setEasyToFind(2)}
                />    
                    2   
                </label>
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={easyToFind === 3}
                        value='3'
                        onChange={(event) => setEasyToFind(3)}
                />
                    3   
                </label>
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={easyToFind === 4}
                        value='4'
                        onChange={(event) => setEasyToFind(4)}
                />
                    4
                </label>
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={easyToFind === 5}
                        value='5'
                        onChange={(event) => setEasyToFind(5)}
                />
                    5
                </label>
            </section>
            <label className="rate-business-questions">
                Was staff respectful?
            </label>
            <section className="question-container">
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={staffWasRespectful === 1}
                        value='1'
                        onChange={(event) => setStaffWasRespectful(1)}
                    />
                          1
                </label>
                <label className="rate-business-btn">
                    <input
                        className="answer"
                    type="radio"
                    checked={staffWasRespectful === 2}
                    value='2'
                    onChange={(event) => setStaffWasRespectful(2)}
                />
                      2
                </label>
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={staffWasRespectful === 3}
                        value='3'
                        onChange={(event) => setStaffWasRespectful(3)}
                />
                      3
                </label>
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={staffWasRespectful === 4}
                        value='4'
                        onChange={(event) => setStaffWasRespectful(4)}
                />
                      4
                </label>
                <label className="rate-business-btn">
                    <input
                        className="answer"
                        type="radio"
                        checked={staffWasRespectful === 5}
                        value='5'
                        onChange={(event) => setStaffWasRespectful(5)}
                />
                      5
            </label>
        </section>
        <label className="rate-business-questions">
            Was contact person present?
        </label>
        <section>
            <label className="rate-business-btn">
                <input
                    className="answer"
                    type="radio"
                    checked={contactPresent === "Yes"}
                    value='Yes'
                    onChange={(event) => setContactPresent("Yes")}
                />
                    Yes
            </label>
            <label className="rate-business-btn">
                <input
                    className="answer"
                    type="radio"
                    checked={contactPresent === "No"}
                    value='No'
                    onChange={(event) => setContactPresent("No")}
                />
                    No
            </label>
        </section>
        <label className="rate-business-questions">
            Would you like to do this job again?
        </label>
        <section className="question-container">
        <label className="rate-business-btn">
            <input
                className="answer"
                type="radio"
                checked={wouldYouDoJobAgain === "Yes"}
                value='Yes'
                onChange={(event) => setWouldYouDoJobAgain("Yes")}
            />
                Yes
        </label>
        <label className="rate-business-btn">
            <input
                className="answer"
                type="radio"
                checked={wouldYouDoJobAgain === "No"}
                value='No'
                onChange={(event) => setWouldYouDoJobAgain("No")}
            />
                No
        </label>
    </section>
    <Link
        to={'/'}
        aria-label="submit rating btn"
        data-testid="submit-link"
        style={{ textDecoration: 'none' }}
        onClick={() => {
              props.setCurrentJob(NoJobSelected)
              props.setCompletedJobs.length > 0 ? props.setCompletedJobs([...props.completedJobs, props.currentJob]) : props.setCompletedJobs([props.currentJob])
              const newUsersJobsList = props.currentUsersJobs.filter((job : Job) => job.jobId !== props.currentJob.jobId)
              props.setCurrentUsersJobs(newUsersJobsList);
              if(wouldYouDoJobAgain === "Yes") {
                props.favoriteJobs.length > 0 ? props.setFavoriteJobs([...props.favoriteJobs, props.currentJob]) : props.setFavoriteJobs([props.currentJob])
              } 
            // wouldYouDoJobAgain  && setFavoriteJobs([...favoriteJobs, props.currentJob])
            }
        }
      >
        <button
          data-testid="submit-btn"
          className="submit-business-rating"
        >
            Submit
        </button>
      </Link>
  </form>
  </section>
    )
}

export default RateJobForm