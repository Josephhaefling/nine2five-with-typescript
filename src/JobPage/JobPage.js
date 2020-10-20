"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var JobPage = function (props) {
    var currentJob = props.currentJob;
    console.log(currentJob);
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement("h1", null, "Hi I am the job page!")));
};
exports["default"] = JobPage;
