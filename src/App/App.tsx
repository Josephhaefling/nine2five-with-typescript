import React, { useState, useEffect, FunctionComponent } from 'react'
import './App.css';
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import moment from 'moment';
import UseApp from '../App/UseApp'
import Header from '../Header/Header'
import OptionsPage from '../OptionsPage/OptionsPage'
import JobsContainer from '../JobsContainer/JobsContainer'
import JobPage from '../JobPage/JobPage'
// import JobsContainer from '../JobsContainer/JobsContainer'
// import StartJob from '../StartJob/StartJob'
// import RateBusiness from '../RateBusiness/RateBusiness'
// import Options from '../Options/Options'
// import CompletedJobs from '../CompletedJobs/CompletedJobs'
// import Favorites from '../Favorites/Favorites'

function App() : JSX.Element {

  interface Job {
    employeeId: number
    bathroomInfo: object
    breakRoomInfo: number
    businessName: string
    contactPerson: object
    jobDate: string
}


  
  const [ availableJobsList, setAvailableJobsList ] = useState <any> ([])
  const [ currentJob, setCurrentJob ] = useState<object>({})
  const [ completedJobs, setCompletedJobs ] = useState <object[]> ([])
  const [ currentBusinessList, setBusinessList ] = useState <object[]> ([])
  const [ endTime, setEndTime ] = useState <string> ('')
  const [ favoriteJobs, setFavoriteJobs ] = useState <object[]> ([])
  const [ isOnHomePage, setIsOnHomePage ] = useState <boolean> (true)
  const [ jobIsComplete, setJobIsComplete ] = useState <boolean> (false)
  const [ jobIsStarted, setJobIsStarted ] = useState <boolean> (false)
  const [ startTime, setStartTime ] = useState <string> ('')
  const [ userId, setUseId ] = useState <number> (3)
  const { businessList, availableJobs } = UseApp(availableJobsList) || {businessList: currentBusinessList, availableJobs: availableJobsList}
  // console.log('app', availableJobs);
  
  
  const mainPage = (
    <section data-testid="App" className="main-page">
      <main data-testid="main-page" className="main-page">
        <section data-testid="user-info-section" className="userInfo-section">
          <h3 data-testid="user-greeting" className="user-greeting">Welcome Back, Michael!</h3>
        </section>
          <JobsContainer 
            availableJobs={ availableJobsList } 
            userId={ userId }
          /> 
      </main>
    </section>
  )

  useEffect(() => {            
    setBusinessList(businessList)
    setAvailableJobsList(availableJobs)
  },[availableJobs, businessList])

  

  
  return (
    
    <section>
      <Header isHome={isOnHomePage} />
      <Switch>
        <Route
          path="/:businessName"
          render={(routeProps) => {            
            const { key } = routeProps.location            
            return <JobPage availableJobs={ availableJobsList } jobId={ key } />
          }}
        />
        <Route 
          path="/options-page"
          render={(routeProps) => {
          setIsOnHomePage(false)
          return <OptionsPage userId={ userId } availableJobs={ availableJobs } />
        }}
        />

        <Route
          path="/"
          render={() => {
            setIsOnHomePage(true)
           return mainPage
          }}
        / >
      </Switch>
    </section>  
  )
}

export default App;
