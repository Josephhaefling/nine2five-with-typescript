var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
var App_1 = __importDefault(require("./App/App"));
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var reducers_1 = __importDefault(require("./reducers"));
// import * as serviceWorker from './serviceWorker';
var react_router_dom_1 = require("react-router-dom");
var store = redux_1.createStore(reducers_1["default"], redux_1.compose(redux_1.applyMiddleware(redux_thunk_1["default"])));
react_dom_1["default"].render(react_1["default"].createElement(react_redux_1.Provider, { store: store },
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(App_1["default"], null))), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
