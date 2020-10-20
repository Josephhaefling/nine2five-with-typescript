"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
require("./Header.css");
var Header = function (props) {
    var isHome = props.isHome;
    return (react_1["default"].createElement("header", { className: "nav-bar" },
        react_1["default"].createElement("h1", null, "Nine2Five"),
        isHome ?
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/options-page', "aria-label": 'options page', style: { textDecoration: "none" } },
                react_1["default"].createElement("button", { className: "options-button" }, "Options")) :
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/', "aria-label": 'home page', style: { textDecoration: "none" } },
                react_1["default"].createElement("button", { className: "options-button" }, "Home"))));
};
exports["default"] = Header;
