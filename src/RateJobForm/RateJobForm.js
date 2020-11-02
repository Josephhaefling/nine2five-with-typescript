"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var RateJobForm = function () {
    return (react_1["default"].createElement("form", { "data-testid": "rate-business-form" },
        react_1["default"].createElement("label", { className: "rate-business-questions" }, "Did you change the trash?"),
        react_1["default"].createElement("section", { className: "question-container" },
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { type: "radio" }),
                "Yes"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { type: "radio", 
                    // checked={changedTrash === false}
                    value: 'No' }),
                "No")),
        react_1["default"].createElement("p", { className: "rate-business-questions" }, "Did you refill the toilet paper?"),
        react_1["default"].createElement("section", { className: "question-container" },
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={changedToiletPaper === true}
                    value: 'Yes' }),
                "Yes"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={changedToiletPaper === false}
                    value: 'No' }),
                "No")),
        react_1["default"].createElement("label", { className: "rate-business-questions" }, "Did you refill the hand soap?"),
        react_1["default"].createElement("section", { className: "question-container" },
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={refilledHandSoap === true}
                    value: 'Yes' }),
                "Yes"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={refilledHandSoap === false}
                    value: 'No' }),
                "No")),
        react_1["default"].createElement("label", { className: "rate-business-questions" }, "Did you refill the paper towels?"),
        react_1["default"].createElement("section", { className: "question-container" },
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={refilledPaperTowls === true}
                    value: 'Yes' }),
                "Yes"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={refilledPaperTowls === false}
                    value: 'No' }),
                "No")),
        react_1["default"].createElement("label", { className: "rate-business-questions" }, "Did you clean all of the toilets?"),
        react_1["default"].createElement("section", { className: "question-container" },
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={cleanedToilets === true}
                    value: 'Yes' }),
                "Yes"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={cleanedToilets === false}
                    value: 'No' }),
                "No")),
        react_1["default"].createElement("label", { className: "rate-business-questions" }, "Did you clean all of the sinks?"),
        react_1["default"].createElement("section", { className: "question-container" },
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { type: "radio", className: "rate-business-questions", 
                    // checked={cleanedSinks === true}
                    value: 'Yes' }),
                "Yes"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { type: "radio", className: "rate-business-questions", 
                    // checked={cleanedSinks === false}
                    value: 'No' }),
                "No")),
        react_1["default"].createElement("label", { className: "rate-business-questions" }, "Was job easy to find?"),
        react_1["default"].createElement("section", { className: "question-container" },
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={easyToFind === 1}
                    value: '1' }),
                "1"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={easyToFind === 2}
                    value: '2' }),
                "2"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={easyToFind === 3}
                    value: '3' }),
                "3"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={easyToFind === 4}
                    value: '4' }),
                "4"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={easyToFind === 5}
                    value: '5' }),
                "5")),
        react_1["default"].createElement("p", { className: "rate-business-questions" }, "Was staff respectful?"),
        react_1["default"].createElement("section", { className: "question-container" },
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={staffWasRespectful === 1}
                    value: '1' }),
                "1"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={staffWasRespectful === 2}
                    value: '2' }),
                "2"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={staffWasRespectful === 3}
                    value: '3' }),
                "3"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={staffWasRespectful === 4}
                    value: '4' }),
                "4"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={staffWasRespectful === 5}
                    value: '5' }),
                "5")),
        react_1["default"].createElement("p", { className: "rate-business-questions" }, "Was contact person present?"),
        react_1["default"].createElement("section", null,
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={contactPresent === true}
                    value: 'Yes' }),
                "Yes"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={contactPresent === false}
                    value: 'No' }),
                "No")),
        react_1["default"].createElement("p", { className: "rate-business-questions" }, "Would you like to do this job again?"),
        react_1["default"].createElement("section", { className: "question-container" },
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={wouldYouDoJobAgain === true}
                    value: 'Yes' }),
                "Yes"),
            react_1["default"].createElement("label", { className: "rate-business-btn" },
                react_1["default"].createElement("input", { className: "rate-business-questions", type: "radio", 
                    // checked={wouldYouDoJobAgain === false}
                    value: 'No' }),
                "No")),
        react_1["default"].createElement(react_router_dom_1.Link, { to: '/', "aria-label": "submit rating btn", "data-testid": "submit-link", style: { textDecoration: 'none' } },
            react_1["default"].createElement("button", { "data-testid": "submit-btn", className: "submit-business-rating" }, "Submit"))));
};
exports["default"] = RateJobForm;
