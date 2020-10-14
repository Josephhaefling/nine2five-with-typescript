import React, { useState, useEffect } from 'react'
import moment from 'moment';
const shortid = require('shortid');
const todaysDate = moment()

interface personInfo {
    person: Person;
}

interface Person {
    cell: string;
    dob: object;
    email: string;
    gender: string;
    id: object;
    location: Location;
    name: object;
    nat: string;
    phone: string;
    picture: object;
    registered:object;
}

interface Location {
    city: string;
    coordinates?: object;
    country: string;
    postcode: number;
    state: string;
    street: Street;
    timezone?: object;
}

interface Street {
    number: number;
    name: string;
}



function useApp(availableJobsList : object[]) {
    
    const jobsList = availableJobsList
    const [error, setError] = useState('')
    const [businessList, setBusinessList] = useState([])
    const [availableJobs, setAvailableJobs] = useState([])
    const businessNames = [
        "Brothers", "Ophelia's", "Oskar Blues", "Slice Works", "Garbanzo", "Turing School of Software and Design",
        "Randos Bar & Grill", "Migration Taco", "Jax", "Whole Foods", "Union Station", "REI", "Tupelo Honey",
        "Denver Performing Arts Complex", "Beet Box Bakery", "Watercourse Food", "City O' City", "Make Believe Bakery",
        "Random Marijuana Shop", "Punchbowl Social", "3 Kings", "Lost Lake", "Some Lawyer's Office", "Wax Trax"
    ]
    const numBathrooms = [1, 2, 3, 4,]
    const toiletsPerBathroom = [1, 2, 3, 4, 5, 6, 7]
    const userId = [1, 2, 3, 4, 5]
    const suppliesFee = [5, 10, 15 ,20]
    const numBreakrooms = [1, 2]
    const jobDate = []
    const jobTime = [
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
    ]


    const getRandomPeople = () => {
      return fetch('https://randomuser.me/api/?results=20')
              .then(res => res.json())
    }

    const addBusinessListToState = async () => {
        const people = await getRandomPeople()
        
        const peopleInColo = movePeopleToColo(people.results)
        console.log('people in colo', peopleInColo);
        
        // const businessList = await turnPeopleIntoBusiness(peopleInColo)
        // const availableJobs = await createJob(businessList)
        // setBusinessList(businessList)
        // setAvailableJobs(availableJobs)
    }

    const movePeopleToColo = (peopleInfo : Person[]) => {
        
        return peopleInfo.map((person : Person) => {
            console.log('person', person.location);
            
            const { street } = person.location 
            const location = {
                street: street,
                city: 'Denver',
                state: 'CO',
                country: 'US',
                postcode: 80202
            }
            person.location = location
            return person
        })
    }

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

    useEffect(() => {

        addBusinessListToState()
    }, [])

    if(jobsList.length === 0) {
      return { businessList: businessList, availableJobs: availableJobs }
    }

}


export default useApp