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
var react_1 = __importDefault(require("react"));
require("../JobPage/JobPage.css");
// import finishJob from "../assets/favorited.png"
var notStarted = __importStar(require("../home-data"));
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
            react_1["default"].createElement("img", { alt: "start job", src: notStarted, "data-testid": "start-job", 
                // disabled={ jobIsStarted } 
                className: "start-job-btn" }))));
};
exports["default"] = JobPage;
