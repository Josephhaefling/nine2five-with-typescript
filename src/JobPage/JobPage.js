"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
require("../JobPage/JobPage.css");
require("../react-app-env.d.ts");
// import finishJob from "../assets/favorited.png"
var stopwatch_png_1 = __importDefault(require("../assets/stopwatch.png"));
// import jobIsStarted from "../assets/timerStarted.png"
// import started from '../assets/timerStarted.png'
// declare namespace JSX {
//   interface ElementAttributesProperty {
//     disabled: { jobIsStarted: string };
//   }
// }
var JobPage = function (props) {
    console.log("I ran");
    var jobId = props.jobId, availableJobs = props.availableJobs;
    var currentJob = availableJobs && availableJobs.find(function (job) { return job.jobId === jobId; });
    console.log(currentJob);
    var businessName = currentJob.businessName, bathroomInfo = currentJob.bathroomInfo, breakroomInfo = currentJob.breakroomInfo, contactPerson = currentJob.contactPerson, location = currentJob.location, phone = currentJob.phone, personImage = currentJob.personImage, cost = currentJob.cost;
    var first = contactPerson.first, last = contactPerson.last;
    var numBathrooms = bathroomInfo.numBathrooms, toiletsPerBathroom = bathroomInfo.toiletsPerBathroom, sinksPerBathroom = bathroomInfo.sinksPerBathroom;
    var city = location.city, postcode = location.postcode, street = location.street;
    var number = street.number, name = street.name;
    var large = personImage.large;
    return (react_1["default"].createElement("section", { className: "job-info-page" },
        react_1["default"].createElement("section", { className: "current-job-card" },
            react_1["default"].createElement("section", { className: "image-container" },
                react_1["default"].createElement("img", { className: "contact-image", src: large, alt: "contact person" })),
            react_1["default"].createElement("h3", { className: "contact-name" },
                first,
                " ",
                last),
            react_1["default"].createElement("p", { className: "contact-name" }, phone),
            react_1["default"].createElement("h4", { className: "street-address" },
                name,
                " ",
                number),
            react_1["default"].createElement("h4", { className: "address" },
                city,
                ", CO ",
                postcode),
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
                cost),
            react_1["default"].createElement("img", { alt: "start job", src: stopwatch_png_1["default"], "data-testid": "start-job", 
                // disabled={ jobIsStarted } 
                className: "start-job-btn" }))));
};
exports["default"] = JobPage;
