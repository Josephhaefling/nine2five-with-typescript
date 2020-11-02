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
var react_router_dom_1 = require("react-router-dom");
require("../JobPage/JobPage.css");
var moment_1 = __importDefault(require("moment"));
var favorite = require("../assets/favorited.png");
var notFavorite = require("../assets/notFavorited.png");
var started = require("../assets/timerStarted.png");
var notStarted = require("../assets/stopwatch.png");
var JobPage = function (props) {
    var _a = react_1.useState(false), jobStarted = _a[0], setJobStarted = _a[1];
    var _b = react_1.useState(""), startTime = _b[0], setStartTime = _b[1];
    var _c = react_1.useState(false), isFavorite = _c[0], setIsFavorite = _c[1];
    var jobId = props.jobId, availableJobs = props.availableJobs;
    var currentJob = availableJobs && availableJobs.find(function (job) { return job.jobId === jobId; });
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
            react_1["default"].createElement("section", { className: "button-container" },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "rate-job-form" + jobId, key: jobId, style: { textDecoration: 'none' }, onClick: function (e) {
                        if (!jobStarted) {
                            e.preventDefault();
                            setJobStarted(!jobStarted);
                            setStartTime(moment_1["default"]().format("hh:mm:ss a"));
                        }
                    } },
                    react_1["default"].createElement("img", { alt: "start job button", src: jobStarted ? started : notStarted, className: "job-button" })),
                react_1["default"].createElement("img", { className: "job-button", src: isFavorite ? favorite : notFavorite, alt: "finish job button", onClick: function (e) { setIsFavorite(!isFavorite); } })))));
};
exports["default"] = JobPage;
