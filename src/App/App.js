"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
require("./App.css");
var UseApp_1 = __importDefault(require("../App/UseApp"));
// import JobsContainer from '../JobsContainer/JobsContainer'
// import StartJob from '../StartJob/StartJob'
// import RateBusiness from '../RateBusiness/RateBusiness'
// import Options from '../Options/Options'
// import Header from '../Header/Header'
// import CompletedJobs from '../CompletedJobs/CompletedJobs'
// import Favorites from '../Favorites/Favorites'
function App() {
    var _a = react_1.useState([]), availableJobsList = _a[0], setAvailableJobsList = _a[1];
    UseApp_1["default"](availableJobsList);
    return (react_1["default"].createElement("p", null, "hi"));
    // const [ currentJob, setCurrentJob ] = useState({})
    // const [ completedJobs, setCompletedJobs ] = useState([])
    // const [ currentBusinessList, setBusinessList ] = useState([])
    // const [ currentUsersJobs, setCurrentUsersJobs ] = useState([])
    // const [ endTime, setEndTime ] = useState('')
    // const [ favoriteJobs, setFavoriteJobs ] = useState([])
    // const [ isOnHomePage, setIsOnHomePage ] = useState(true)
    // const [ jobIsComplete, setJobIsComplete ] = useState(false)
    // const [ jobIsStarted, setJobIsStarted ] = useState(false)
    // const [ startTime, setStartTime ] = useState('')
    // const [ userId, setUseId ] = useState(3)
    // const { businessList, availableJobs } = useApp(availableJobsList) || {businessList: currentBusinessList, availableJobs: availableJobsList}
    // const findJob = (jobId) => {
    //   return favoriteJobs.find(job => job.jobId === jobId)
    // }
    // const removeFromFavorites = (event) => {
    //   const removeId = event.target.name
    //   const jobToRemove = findJob(removeId)
    //   const newFavsArray = favoriteJobs.filter(job => job.jobId !== jobToRemove.jobId)
    //   setFavoriteJobs(newFavsArray)
    // }
    // const mainPage = (
    //   <section data-testid="App" className="App">
    //     <main data-testid="main-page" className="main-page">
    //       <section data-testid="user-info-section" className="userInfo-section">
    //         <h3 data-testid="user-greeting" className="user-greeting">Welcome Back, Michael!</h3>
    //       </section>
    //       {/* <JobsContainer
    //         currentUser={ userId }
    //         currentUsersJobs={ currentUsersJobs }
    //         favoriteJobs={ favoriteJobs }
    //         findJob={ findJob }
    //         jobs={ availableJobsList }
    //         removeFromFavorites={ removeFromFavorites }
    //         setCurrentJob={ setCurrentJob }
    //         setCurrentUsersJobs={setCurrentUsersJobs}
    //         setFavoriteJobs={ setFavoriteJobs }
    //       /> */}
    //     </main>
    //   </section>
    // )
    // useEffect(() => {
    //   setBusinessList(businessList)
    //   setAvailableJobsList(availableJobs)
    // })
    // return (
    //   <Switch>
    //   <Route
    //     exact path="/Favorite-Jobs"
    //     render={(routeProps) => {
    //       const { params } = routeProps.match
    //       const { id } = params
    //       return (
    //         <section>
    //           {/* <Header isOnHomePage={ isOnHomePage } setIsOnHomePage={ setIsOnHomePage } /> */}
    //           {/* <Favorites favoriteJobs={ favoriteJobs }/> */}
    //         </section>
    //       )
    //     }}
    //   />
    //   <Route
    //     exact path="/Completed-Jobs"
    //     render={(routeProps) => {
    //       const { params } = routeProps.match
    //       const { id } = params
    //       return (
    //         <section>
    //           {/* <Header isOnHomePage={ isOnHomePage } setIsOnHomePage={ setIsOnHomePage } /> */}
    //           {/* <CompletedJobs completedJobs={ completedJobs }/> */}
    //         </section>
    //       )
    //     }}
    //   />
    //   <Route
    //     exact path="/Options"
    //     render={(routeProps) => {
    //       const { params } = routeProps.match
    //       const { id } = params
    //       return (
    //         <section>
    //           {/* <Header isOnHomePage={ isOnHomePage } setIsOnHomePage={ setIsOnHomePage } /> */}
    //           {/* <Options /> */}
    //         </section>
    //       )
    //     }}
    //   />
    //   <Route
    //     exact path="/RateBusiness"
    //     render={(routeProps) => {
    //       const { params } = routeProps.match
    //       const { id } = params
    //       return (
    //         <section>
    //         {/* <Header isOnHomePage={ isOnHomePage } setIsOnHomePage={ setIsOnHomePage } /> */}
    //         {/* <RateBusiness
    //           availableJobsList={ availableJobsList }
    //           completedJobs={ completedJobs }
    //           currentJob={ currentJob }
    //           favoriteJobs={ favoriteJobs }
    //           jobIsStarted={ jobIsStarted }
    //           setAvailableJobs={ setAvailableJobsList }
    //           setCompletedJobs={ setCompletedJobs }
    //           setCurrentJob={ setCurrentJob }
    //           setFavoriteJobs={ setFavoriteJobs }
    //           setJobIsStarted={ setJobIsStarted }
    //         /> */}
    //         </section>
    //       )
    //     }}
    //   />
    //   <Route
    //     exact path="/:currentJob"
    //     render={(routeProps) => {
    //       const { params } = routeProps.match
    //       const { id } = params
    //       return (
    //         <section>
    //         {/* <Header isOnHomePage={ isOnHomePage } setIsOnHomePage={ setIsOnHomePage } /> */}
    //         {/* <StartJob
    //           {...routeProps}
    //           jobInfo={ currentJob }
    //           setCurrentJob={ setCurrentJob }
    //           jobIsStarted={ jobIsStarted }
    //           setJobIsStarted={ setJobIsStarted }
    //           setJobIsComplete={ setJobIsComplete }
    //           setStartTime={ setStartTime }
    //           setEndTime={ setEndTime }
    //           avavialbleJobsList={ availableJobsList }
    //           setAvailableJobsList={ setAvailableJobsList }
    //           setStartTime={ setStartTime }
    //         /> */}
    //         </section>
    //       )
    //     }}
    //   />
    //     <Route exact path="/" render={() => {
    //       return (
    //       <section>
    //         {/* <Header isOnHomePage={ isOnHomePage } setIsOnHomePage={ setIsOnHomePage } /> */}
    //         {mainPage}
    //       </section>
    //     )
    //     }} />
    //   </Switch>
    // );
}
exports["default"] = App;
