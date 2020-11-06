import React, { useState, useEffect, FunctionComponent } from 'react'
import './App.css';
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import moment from 'moment';
import UseApp from '../App/UseApp'
import Header from '../Header/Header'
import OptionsPage from '../OptionsPage/OptionsPage'
import JobsContainer from '../JobsContainer/JobsContainer'
import RateJobForm from '../RateJobForm/RateJobForm'
import JobPage from '../JobPage/JobPage'
import FavoriteJobsPage from '../FavoriteJobsPage/FavoriteJobsPage'
import { Job, noJobSelected } from "../home-data"

function App() : JSX.Element {

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

  const [ availableJobsList, setAvailableJobsList ] = useState <any> ([])
  const [ currentJob, setCurrentJob ] = useState <Job | noJobSelected>  (NoJobSelected)
  const [ completedJobs, setCompletedJobs ] = useState <object[]> ([])
  const [ currentBusinessList, setBusinessList ] = useState <object[]> ([])
  const [ endTime, setEndTime ] = useState <string> ('')
  const [ favoriteJobs, setFavoriteJobs ] = useState <Job[] | []> ([])
  const [ isOnHomePage, setIsOnHomePage ] = useState <boolean> (true)
  const [ jobIsComplete, setJobIsComplete ] = useState <boolean> (false)
  const [ jobIsStarted, setJobIsStarted ] = useState <boolean> (false)
  const [ startTime, setStartTime ] = useState <string> ('')
  const [ userId, setUseId ] = useState <number> (3)
  const { businessList, availableJobs } = availableJobsList !== undefined && UseApp(availableJobsList) || {businessList: currentBusinessList, availableJobs: availableJobsList}
  const [ currentUsersJobs, setCurrentUsersJobs ] = useState <Job[] | []> ([])
  
  const getUsersJobs = () : Job[] => {                
        const usersJobs = availableJobsList.filter((job : Job) => job.employeeId === userId) 
        return usersJobs
      }  

  const mainPage = (
    <section data-testid="App" className="main-page">
      <main data-testid="main-page" className="main-page">
        <section data-testid="user-info-section" className="userInfo-section">
          <h3 data-testid="user-greeting" className="user-greeting">Welcome Back, Michael!</h3>
        </section>
          <JobsContainer 
            availableJobs={ availableJobsList } 
            userId={ userId }
            setCurrentJob={ setCurrentJob }
            currentUserJobs={ currentUsersJobs }
          /> 
      </main>
    </section>
  )

  useEffect(() => {            
    setBusinessList(businessList)
    setAvailableJobsList(availableJobs)
    const usersJobs = getUsersJobs()  
    setCurrentUsersJobs(usersJobs)        
  },[availableJobs, businessList, availableJobsList])

  

  
  return (
    <section>
      <Header isHome={isOnHomePage} />
      <Switch>
        <Route 
          exact path="/options-page"
          render={(routeProps) => {
          setIsOnHomePage(false)
          return <OptionsPage userId={ userId } availableJobs={ availableJobs } />
        }}
        />
        
        <Route 
          exact path="/rate-job-form:jobID"
          render={(routeProps) => {            
          setIsOnHomePage(false)
          return <RateJobForm currentJob={ currentJob } currentUsersJobs={ currentUsersJobs } favoriteJobs={ favoriteJobs } setCurrentJob={ setCurrentJob } setFavoriteJobs={ setFavoriteJobs } setCompletedJobs={ setCompletedJobs } setCurrentUsersJobs={setCurrentUsersJobs}/>
        }}
        />

        <Route 
          exact path="/favorite-jobs"
          render={() => <FavoriteJobsPage favoriteJobs={ favoriteJobs } />}
        />

        <Route
          exact path="/:businessName:jobId"
          render={(routeProps) => {            
            const { key } = routeProps.location  
            const jobId = routeProps.match.params.jobId.split("-")[1]
            if(availableJobsList.length > 0 ) {
              return <JobPage availableJobs={ availableJobsList } jobId={ jobId } currentJob={ currentJob } favoriteJobs={ favoriteJobs } setFavoriteJobs={ setFavoriteJobs } />
            } else {
              return <p>Something went wrong try again.</p>
            }           
          }}
        />

        <Route
          path="/"
          render={() => {
            if(availableJobsList.length === 0) {
              setIsOnHomePage(true)
              return <p>It looks like you don't have any jobs today.</p>
            } else {
               setIsOnHomePage(true)
              return mainPage
            }
            }
          }
        / >
      </Switch>
    </section>  
  )
}

export default App;
