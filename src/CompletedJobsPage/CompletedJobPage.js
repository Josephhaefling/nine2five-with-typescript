"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var CompletedJobPage = function (props) {
    console.log("props", props.completedJobs);
    var getCompletedJobs = function (completedJobs) {
        return completedJobs.length > 0 && completedJobs.map(function (job) {
            var businessName = job.businessName, bathroomInfo = job.bathroomInfo, breakroomInfo = job.breakroomInfo, contactPerson = job.contactPerson, jobId = job.jobId, time = job.time, cost = job.cost, location = job.location;
            var numBathrooms = bathroomInfo.numBathrooms, toiletsPerBathroom = bathroomInfo.toiletsPerBathroom, sinksPerBathroom = bathroomInfo.sinksPerBathroom;
            var first = contactPerson.first, last = contactPerson.last;
            var city = location.city, postcode = location.postcode, street = location.street;
            var number = street.number, name = street.name;
            return (react_1["default"].createElement("section", { className: 'job-card', id: jobId, key: jobId },
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
                    cost)));
        });
    };
    var completedJobsXML = getCompletedJobs(props.completedJobs);
    console.log("completed jobs XML:", completedJobsXML);
    return (react_1["default"].createElement("section", null, completedJobsXML));
};
exports["default"] = CompletedJobPage;
