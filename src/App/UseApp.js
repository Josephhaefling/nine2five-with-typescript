"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = require("react");
var moment_1 = __importDefault(require("moment"));
var shortid = require('shortid');
var todaysDate = moment_1["default"]();
function useApp(availableJobsList) {
    var _this = this;
    var jobsList = availableJobsList;
    var _a = react_1.useState(''), error = _a[0], setError = _a[1];
    var _b = react_1.useState([]), businessList = _b[0], setBusinessList = _b[1];
    var _c = react_1.useState([]), availableJobs = _c[0], setAvailableJobs = _c[1];
    var businessNames = [
        "Brothers", "Ophelia's", "Oskar Blues", "Slice Works", "Garbanzo", "Turing School of Software and Design",
        "Randos Bar & Grill", "Migration Taco", "Jax", "Whole Foods", "Union Station", "REI", "Tupelo Honey",
        "Denver Performing Arts Complex", "Beet Box Bakery", "Watercourse Food", "City O' City", "Make Believe Bakery",
        "Random Marijuana Shop", "Punchbowl Social", "3 Kings", "Lost Lake", "Some Lawyer's Office", "Wax Trax"
    ];
    var numBathrooms = [1, 2, 3, 4,];
    var toiletsPerBathroom = [1, 2, 3, 4, 5, 6, 7];
    var userId = [1, 2, 3, 4, 5];
    var suppliesFee = [5, 10, 15, 20];
    var numBreakrooms = [1, 2];
    var jobDate = [];
    var jobTime = [
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00"
    ];
    var getRandomPeople = function () {
        return fetch('https://randomuser.me/api/?results=20')
            .then(function (res) { return res.json(); });
    };
    var addBusinessListToState = function () { return __awaiter(_this, void 0, void 0, function () {
        var people, peopleInColo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getRandomPeople()];
                case 1:
                    people = _a.sent();
                    peopleInColo = movePeopleToColo(people.results);
                    console.log('people in colo', peopleInColo);
                    return [2 /*return*/];
            }
        });
    }); };
    var movePeopleToColo = function (peopleInfo) {
        return peopleInfo.map(function (person) {
            console.log('person', person.location);
            var street = person.location.street;
            var location = {
                street: street,
                city: 'Denver',
                state: 'CO',
                country: 'US',
                postcode: 80202
            };
            person.location = location;
            return person;
        });
    };
    //     const turnPeopleIntoBusiness = (peopleInfo : object[]) => {
    //         return peopleInfo.map(person => {
    //             const randomBusiness = businessNames[Math.floor(Math.random() * businessNames.length)];
    //             const businessBathrooms = numBathrooms[Math.floor(Math.random() * numBathrooms.length)];
    //             const businessToiletsPerBathroom = toiletsPerBathroom[Math.floor(Math.random() * toiletsPerBathroom.length)];
    //             const businessSinksPerBathroom = businessToiletsPerBathroom
    //             const businessBreakrooms = numBreakrooms[Math.floor(Math.random() * numBreakrooms.length)];
    //             person.bathroomInfo = {numBathrooms: businessBathrooms, toiletsPerBathroom: businessToiletsPerBathroom, sinksPerBathroom: businessToiletsPerBathroom}
    //             person.businessName = randomBusiness
    //             person.breakroomInfo = businessBreakrooms
    //             return person
    //         })
    //     }
    //     const createCost = (currentBusiness) => {
    //           const { numBathrooms, toiletsPerBathroom, sinksPerBathroom } = currentBusiness.bathroomInfo
    //           const { breakroomInfo } = currentBusiness
    //           const travelFee = 5
    //           const cleanBreakroomFee = breakroomInfo * 5
    //           const cleanBathroomFee = (numBathrooms * toiletsPerBathroom * 1.00) + (numBathrooms * sinksPerBathroom * .50)
    //           const time = jobTime[Math.floor(Math.random() * jobTime.length)]
    //           const userAssigned = userId[Math.floor(Math.random() * userId.length)]
    //           const suppliesCost = suppliesFee[Math.floor(Math.random() * suppliesFee.length)];
    //           const cost = travelFee + cleanBathroomFee + cleanBreakroomFee + suppliesCost
    //           currentBusiness.jobCost = cost
    //           currentBusiness.jobTime = time
    //           currentBusiness.userId = userAssigned
    //           return currentBusiness
    //     }
    //     const createJob = (businessList) => {
    //       const jobWithCost = businessList.map(business => createCost(business))
    //       const availableJobs =  jobWithCost.map(job => {
    //       const { bathroomInfo, breakroomInfo, location, phone, picture, name, businessName, jobCost, userTime, jobTime, userId} = job
    //         const newJob = {
    //             jobId: shortid.generate(),
    //             jobDate: todaysDate.format('MM/DD/YYYY'),
    //             businessName: businessName,
    //             location: location,
    //             phone: phone,
    //             contactPerson: name,
    //             personImage: picture,
    //             bathroomInfo: bathroomInfo,
    //             breakroomInfo: breakroomInfo,
    //             cost: jobCost,
    //             time: jobTime,
    //             employeeId: userId
    //           }
    //           return newJob
    //       })
    //       return availableJobs
    //     }
    react_1.useEffect(function () {
        addBusinessListToState();
    }, []);
    if (jobsList.length === 0) {
        return { businessList: businessList, availableJobs: availableJobs };
    }
}
exports["default"] = useApp;
