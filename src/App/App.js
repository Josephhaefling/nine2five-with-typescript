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
var react_router_dom_1 = require("react-router-dom");
var UseApp_1 = __importDefault(require("../App/UseApp"));
var Header_1 = __importDefault(require("../Header/Header"));
var OptionsPage_1 = __importDefault(require("../OptionsPage/OptionsPage"));
var JobsContainer_1 = __importDefault(require("../JobsContainer/JobsContainer"));
var RateJobForm_1 = __importDefault(require("../RateJobForm/RateJobForm"));
var JobPage_1 = __importDefault(require("../JobPage/JobPage"));
function App() {
    var NoJobSelected = {
        cost: "",
        employeeId: 0,
        bathroomInfo: { numBathrooms: 0, toiletsPerBathroom: 0, sinksPerBathroom: 0 },
        breakroomInfo: 0,
        businessName: "",
        contactPerson: { last: "", first: "" },
        jobDate: "",
        jobId: "",
        location: { city: "", postcode: 0, street: { number: 0, name: "" } },
        phone: "",
        personImage: { large: "" },
        time: ""
    };
    var _a = react_1.useState([]), availableJobsList = _a[0], setAvailableJobsList = _a[1];
    var _b = react_1.useState(NoJobSelected), currentJob = _b[0], setCurrentJob = _b[1];
    var _c = react_1.useState([]), completedJobs = _c[0], setCompletedJobs = _c[1];
    var _d = react_1.useState([]), currentBusinessList = _d[0], setBusinessList = _d[1];
    var _e = react_1.useState(''), endTime = _e[0], setEndTime = _e[1];
    var _f = react_1.useState([]), favoriteJobs = _f[0], setFavoriteJobs = _f[1];
    var _g = react_1.useState(true), isOnHomePage = _g[0], setIsOnHomePage = _g[1];
    var _h = react_1.useState(false), jobIsComplete = _h[0], setJobIsComplete = _h[1];
    var _j = react_1.useState(false), jobIsStarted = _j[0], setJobIsStarted = _j[1];
    var _k = react_1.useState(''), startTime = _k[0], setStartTime = _k[1];
    var _l = react_1.useState(3), userId = _l[0], setUseId = _l[1];
    var _m = availableJobsList !== undefined && UseApp_1["default"](availableJobsList) || { businessList: currentBusinessList, availableJobs: availableJobsList }, businessList = _m.businessList, availableJobs = _m.availableJobs;
    var _o = react_1.useState([]), currentUsersJobs = _o[0], setCurrentUsersJobs = _o[1];
    var getUsersJobs = function () {
        var usersJobs = availableJobsList.filter(function (job) { return job.employeeId === userId; });
        return usersJobs;
    };
    var mainPage = (react_1["default"].createElement("section", { "data-testid": "App", className: "main-page" },
        react_1["default"].createElement("main", { "data-testid": "main-page", className: "main-page" },
            react_1["default"].createElement("section", { "data-testid": "user-info-section", className: "userInfo-section" },
                react_1["default"].createElement("h3", { "data-testid": "user-greeting", className: "user-greeting" }, "Welcome Back, Michael!")),
            react_1["default"].createElement(JobsContainer_1["default"], { availableJobs: availableJobsList, userId: userId, setCurrentJob: setCurrentJob, currentUserJobs: currentUsersJobs }))));
    react_1.useEffect(function () {
        setBusinessList(businessList);
        setAvailableJobsList(availableJobs);
        var usersJobs = getUsersJobs();
        setCurrentUsersJobs(usersJobs);
    }, [availableJobs, businessList, availableJobsList]);
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement(Header_1["default"], { isHome: isOnHomePage }),
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/rate-job-form:jobID", render: function (routeProps) {
                    setIsOnHomePage(false);
                    return react_1["default"].createElement(RateJobForm_1["default"], { currentJob: currentJob, currentUsersJobs: currentUsersJobs, favoriteJobs: favoriteJobs, setCurrentJob: setCurrentJob, setFavoriteJobs: setFavoriteJobs, setCompletedJobs: setCompletedJobs, setCurrentUsersJobs: setCurrentUsersJobs });
                } }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/:businessName:jobId", render: function (routeProps) {
                    var key = routeProps.location.key;
                    var jobId = routeProps.match.params.jobId.split("-")[1];
                    if (availableJobsList.length > 0) {
                        return react_1["default"].createElement(JobPage_1["default"], { availableJobs: availableJobsList, jobId: jobId, currentJob: currentJob, favoriteJobs: favoriteJobs, setFavoriteJobs: setFavoriteJobs });
                    }
                    else {
                        return react_1["default"].createElement("p", null, "Something went wrong try again.");
                    }
                } }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/options-page", render: function (routeProps) {
                    setIsOnHomePage(false);
                    return react_1["default"].createElement(OptionsPage_1["default"], { userId: userId, availableJobs: availableJobs });
                } }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", render: function () {
                    if (availableJobsList.length === 0) {
                        setIsOnHomePage(true);
                        return react_1["default"].createElement("p", null, "It looks like you don't have any jobs today.");
                    }
                    else {
                        setIsOnHomePage(true);
                        return mainPage;
                    }
                } }))));
}
exports["default"] = App;
