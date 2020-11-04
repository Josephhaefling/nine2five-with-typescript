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
var react_router_dom_1 = require("react-router-dom");
require("./RateJobForm.css");
var RateJobForm = function () {
    var _a = react_1.useState(""), changedTrash = _a[0], setChangedTrash = _a[1];
    var _b = react_1.useState(""), changedToiletPaper = _b[0], setChangedToiletPaper = _b[1];
    var _c = react_1.useState(""), refilledHandSoap = _c[0], setRefilledHandSoap = _c[1];
    var _d = react_1.useState(""), refilledPaperTowls = _d[0], setRefilledPaperTowls = _d[1];
    var _e = react_1.useState(""), cleanedToilets = _e[0], setCleanedToilets = _e[1];
    var _f = react_1.useState(""), cleanedSinks = _f[0], setCleanedSinks = _f[1];
    var _g = react_1.useState(0), easyToFind = _g[0], setEasyToFind = _g[1];
    var _h = react_1.useState(0), staffWasRespectful = _h[0], setStaffWasRespectful = _h[1];
    var _j = react_1.useState(""), contactPresent = _j[0], setContactPresent = _j[1];
    var _k = react_1.useState(""), wouldYouDoJobAgain = _k[0], setWouldYouDoJobAgain = _k[1];
    // const jobToRemove = availableJobsList && availableJobsList.find(availableJob => availableJob && availableJob.jobId === jobId)
    // const newJobsList = availableJobsList.filter(availableJob => availableJob && availableJob.jobId !== jobToRemove.jobId)
    // const addToCompletedJobs = () => {
    // if(jobToRemove) {
    // setCompletedJobs([...completedJobs, jobToRemove])
    // }
    // }
    // useEffect(() => addToCompletedJobs(), completedJobs)
    return (react_1["default"].createElement("section", { className: "rate-job-page" },
        react_1["default"].createElement("form", { "data-testid": "rate-business-form" },
            react_1["default"].createElement("label", { className: "rate-business-questions" }, "Did you change the trash?"),
            react_1["default"].createElement("section", { className: "question-container" },
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: changedTrash === "Yes", value: 'Yes', onChange: function (event) { return setChangedTrash("Yes"); } }),
                    "Yes"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: changedTrash === "No", value: 'No', onChange: function (event) { return setChangedTrash("No"); } }),
                    "No")),
            react_1["default"].createElement("label", { className: "rate-business-questions" }, "Did you refill the toilet paper?"),
            react_1["default"].createElement("section", { className: "question-container" },
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: changedToiletPaper === "Yes", value: 'Yes', onChange: function (event) { return setChangedToiletPaper("Yes"); } }),
                    "Yes"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: changedToiletPaper === "No", value: 'No', onChange: function (event) { return setChangedToiletPaper("No"); } }),
                    "No")),
            react_1["default"].createElement("label", { className: "rate-business-questions" }, "Did you refill the hand soap?"),
            react_1["default"].createElement("section", { className: "question-container" },
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: refilledHandSoap === "Yes", value: 'Yes', onChange: function (event) { return setRefilledHandSoap("Yes"); } }),
                    "Yes"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: refilledHandSoap === "No", value: 'No', onChange: function (event) { return setRefilledHandSoap("No"); } }),
                    "No")),
            react_1["default"].createElement("label", { className: "rate-business-questions" }, "Did you refill the paper towels?"),
            react_1["default"].createElement("section", { className: "question-container" },
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: refilledPaperTowls === "Yes", value: 'Yes', onChange: function (event) { return setRefilledPaperTowls("Yes"); } }),
                    "Yes"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: refilledPaperTowls === "No", value: 'No', onChange: function (event) { return setRefilledPaperTowls("No"); } }),
                    "No")),
            react_1["default"].createElement("label", { className: "rate-business-questions" }, "Did you clean all of the toilets?"),
            react_1["default"].createElement("section", { className: "question-container" },
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: cleanedToilets === "Yes", value: 'Yes', onChange: function (event) { return setCleanedToilets("Yes"); } }),
                    "Yes"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: cleanedToilets === "No", value: 'No', onChange: function (event) { return setCleanedToilets("No"); } }),
                    "No")),
            react_1["default"].createElement("label", { className: "rate-business-questions" }, "Did you clean all of the sinks?"),
            react_1["default"].createElement("section", { className: "question-container" },
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: cleanedSinks === "Yes", value: 'Yes', onChange: function (event) { return setCleanedSinks("Yes"); } }),
                    "Yes"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: cleanedSinks === "No", value: 'No', onChange: function (event) { return setCleanedSinks("No"); } }),
                    "No")),
            react_1["default"].createElement("label", { className: "rate-business-questions" }, "Was job easy to find?"),
            react_1["default"].createElement("section", { className: "question-container" },
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: easyToFind === 1, value: '1', onChange: function (event) { return setEasyToFind(1); } }),
                    "1"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: easyToFind === 2, value: '2', onChange: function (event) { return setEasyToFind(2); } }),
                    "2"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: easyToFind === 3, value: '3', onChange: function (event) { return setEasyToFind(3); } }),
                    "3"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: easyToFind === 4, value: '4', onChange: function (event) { return setEasyToFind(4); } }),
                    "4"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: easyToFind === 5, value: '5', onChange: function (event) { return setEasyToFind(5); } }),
                    "5")),
            react_1["default"].createElement("label", { className: "rate-business-questions" }, "Was staff respectful?"),
            react_1["default"].createElement("section", { className: "question-container" },
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: staffWasRespectful === 1, value: '1', onChange: function (event) { return setStaffWasRespectful(1); } }),
                    "1"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: staffWasRespectful === 2, value: '2', onChange: function (event) { return setStaffWasRespectful(2); } }),
                    "2"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: staffWasRespectful === 3, value: '3', onChange: function (event) { return setStaffWasRespectful(3); } }),
                    "3"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: staffWasRespectful === 4, value: '4', onChange: function (event) { return setStaffWasRespectful(4); } }),
                    "4"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: staffWasRespectful === 5, value: '5', onChange: function (event) { return setStaffWasRespectful(5); } }),
                    "5")),
            react_1["default"].createElement("label", { className: "rate-business-questions" }, "Was contact person present?"),
            react_1["default"].createElement("section", null,
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: contactPresent === "Yes", value: 'Yes', onChange: function (event) { return setContactPresent("Yes"); } }),
                    "Yes"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: contactPresent === "No", value: 'No', onChange: function (event) { return setContactPresent("No"); } }),
                    "No")),
            react_1["default"].createElement("label", { className: "rate-business-questions" }, "Would you like to do this job again?"),
            react_1["default"].createElement("section", { className: "question-container" },
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: wouldYouDoJobAgain === "Yes", value: 'Yes', onChange: function (event) { return setWouldYouDoJobAgain("Yes"); } }),
                    "Yes"),
                react_1["default"].createElement("label", { className: "rate-business-btn" },
                    react_1["default"].createElement("input", { className: "answer", type: "radio", checked: wouldYouDoJobAgain === "No", value: 'No', onChange: function (event) { return setWouldYouDoJobAgain("No"); } }),
                    "No")),
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/', "aria-label": "submit rating btn", "data-testid": "submit-link", style: { textDecoration: 'none' } },
                react_1["default"].createElement("button", { "data-testid": "submit-btn", className: "submit-business-rating" }, "Submit")))));
};
exports["default"] = RateJobForm;
