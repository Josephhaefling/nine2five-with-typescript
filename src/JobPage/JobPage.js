"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var JobPage = function (props) {
    console.log("I ran");
    var jobId = props.jobId, availableJobs = props.availableJobs;
    var currentJob = availableJobs && availableJobs.find(function (job) { return job.jobId === jobId; });
    console.log(currentJob);
    var businessName = currentJob.businessName, bathroomInfo = currentJob.bathroomInfo, breakroomInfo = currentJob.breakroomInfo, contactPerson = currentJob.contactPerson, location = currentJob.location, phone = currentJob.phone, personImage = currentJob.personImage;
    var _a = contactPerson && contactPerson, first = _a.first, last = _a.last;
    var large = (personImage && personImage).large;
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement("img", { src: large, alt: "contact person" }),
        react_1["default"].createElement("h3", null,
            first,
            " ",
            last)));
};
exports["default"] = JobPage;
