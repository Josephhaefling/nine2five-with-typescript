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
exports.__esModule = true;
var react_1 = __importStar(require("react"));
require("../JobsContainer/JobsContainer.css");
var react_router_dom_1 = require("react-router-dom");
var JobsContainer = function (props) {
    console.log(props);
    var _a = react_1.useState([]), currentUsersJobs = _a[0], setCurrentUsersJobs = _a[1];
    var availableJobs = props.availableJobs, userId = props.userId;
    var getUsersJobs = function (jobsList, id) {
        var usersJobs = availableJobs.filter(function (job) { return job.employeeId === id; });
        return usersJobs;
    };
    var getJobObjects = function () {
        var usersJobs = getUsersJobs(availableJobs, userId);
        return usersJobs.map(function (job) {
            var businessName = job.businessName, bathroomInfo = job.bathroomInfo, breakroomInfo = job.breakroomInfo, contactPerson = job.contactPerson, jobId = job.jobId, time = job.time, cost = job.cost, location = job.location;
            var numBathrooms = bathroomInfo.numBathrooms, toiletsPerBathroom = bathroomInfo.toiletsPerBathroom, sinksPerBathroom = bathroomInfo.sinksPerBathroom;
            var first = contactPerson.first, last = contactPerson.last;
            var city = location.city, postcode = location.postcode, street = location.street;
            var number = street.number, name = street.name;
            if (job.employeeId === userId) {
                return (react_1["default"].createElement(react_router_dom_1.Link, { className: "job-links", to: "/" + businessName + "-" + jobId, key: jobId, style: { textDecoration: 'none' }, onClick: function (e) { return props.setCurrentJob(job); } },
                    react_1["default"].createElement("section", { className: 'job-card', id: jobId, key: jobId },
                        react_1["default"].createElement("p", null, time),
                        react_1["default"].createElement("h3", null, businessName),
                        react_1["default"].createElement("h3", null,
                            number,
                            " ",
                            name),
                        react_1["default"].createElement("h3", null,
                            city,
                            " ",
                            postcode),
                        react_1["default"].createElement("h5", null, first + " " + last),
                        react_1["default"].createElement("p", null,
                            numBathrooms,
                            " bathrooms with ",
                            toiletsPerBathroom,
                            " toilets and ",
                            sinksPerBathroom,
                            " sinks. "),
                        react_1["default"].createElement("p", null,
                            breakroomInfo,
                            " breakrooms."),
                        react_1["default"].createElement("p", null,
                            "$",
                            cost))));
            }
        });
    };
    var jobs = getJobObjects();
    return (react_1["default"].createElement("section", { className: 'todays-jobs-display' },
        react_1["default"].createElement("h2", null, "Here's todays jobs."),
        react_1["default"].createElement("section", { className: 'todays-jobs' }, jobs)));
};
exports["default"] = JobsContainer;
