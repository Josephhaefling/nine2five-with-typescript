"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
require("../JobsContainer/JobsContainer.css");
var react_router_dom_1 = require("react-router-dom");
var JobsContainer = function (props) {
    var getJobObjects = function (currentUserJobs) {
        return currentUserJobs.map(function (job) {
            var businessName = job.businessName, bathroomInfo = job.bathroomInfo, breakroomInfo = job.breakroomInfo, contactPerson = job.contactPerson, jobId = job.jobId, time = job.time, cost = job.cost, location = job.location;
            var numBathrooms = bathroomInfo.numBathrooms, toiletsPerBathroom = bathroomInfo.toiletsPerBathroom, sinksPerBathroom = bathroomInfo.sinksPerBathroom;
            var first = contactPerson.first, last = contactPerson.last;
            var city = location.city, postcode = location.postcode, street = location.street;
            var number = street.number, name = street.name;
            return (react_1["default"].createElement(react_router_dom_1.Link, { className: "job-links", to: "/" + businessName + "-" + jobId, key: jobId, style: { textDecoration: 'none' }, onClick: function (e) { return props.setCurrentJob(job); } },
                react_1["default"].createElement("section", { className: 'job-card', id: jobId, key: jobId },
                    react_1["default"].createElement("p", { className: "job-time" }, time),
                    react_1["default"].createElement("h3", { className: "job-name" }, businessName),
                    react_1["default"].createElement("h3", { className: "job-address" },
                        number,
                        " ",
                        name),
                    react_1["default"].createElement("h3", { className: "city-state" },
                        city,
                        " ",
                        postcode),
                    react_1["default"].createElement("h5", { className: "contact-person" }, first + " " + last),
                    react_1["default"].createElement("p", { className: "bathroom-info" },
                        numBathrooms,
                        " bathrooms with ",
                        toiletsPerBathroom,
                        " toilets and ",
                        sinksPerBathroom,
                        " sinks. "),
                    react_1["default"].createElement("p", { className: "breakroom-info" },
                        breakroomInfo,
                        " breakrooms."),
                    react_1["default"].createElement("p", { className: "job-cost" },
                        "$",
                        cost))));
        });
    };
    var jobs = getJobObjects(props.currentUserJobs);
    return (react_1["default"].createElement("section", { className: 'todays-jobs-display' },
        react_1["default"].createElement("h2", null, "Here's todays jobs."),
        react_1["default"].createElement("section", { className: 'todays-jobs' }, jobs)));
};
exports["default"] = JobsContainer;
