"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var OptionsPage = function (props) {
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement("p", { className: "user-greeting" }, "Welcome back Michael!"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: '/completed-jobs' },
            react_1["default"].createElement("button", null, "Completed Jobs")),
        react_1["default"].createElement(react_router_dom_1.Link, { to: '/make-schedule' },
            react_1["default"].createElement("button", null, "Make Schedule")),
        react_1["default"].createElement(react_router_dom_1.Link, { to: 'favorite-jobs' },
            react_1["default"].createElement("button", null, "Favorite Jobs"))));
};
exports["default"] = OptionsPage;
