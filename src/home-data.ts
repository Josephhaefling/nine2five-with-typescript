export interface Bathroom {
    numBathrooms: number
    toiletsPerBathroom: number
    sinksPerBathroom: number
}

export interface Job {
    cost: number
    employeeId: number
    bathroomInfo: Bathroom
    breakroomInfo: number
    businessName: string
    contactPerson: ContactPerson
    jobDate: string
    jobId: string
    location: Location
    phone: string
    personImage: PersonImage
    time: string
}

export interface noJobSelected {
    cost: string
    employeeId: number
    bathroomInfo: Bathroom
    breakroomInfo: number
    businessName: string
    contactPerson: ContactPerson
    jobDate: string
    jobId: string
    location: Location
    phone: string
    personImage: PersonImage
    time: string
}

export interface ContactPerson {
    first: string
    last: string
}

export interface Location {
    city: string
    postcode: number
    street: Street
}

export interface Street {
    number: number
    name: string
}

export interface PersonImage {
    large: string
}

export interface Props {
    jobId: string
    availableJobs: Job[]
    currentJob: Job | noJobSelected
    favoriteJobs: Job[]
    setFavoriteJobs: Function
}

export interface jobsContainerProps {
    jobId: string
    availableJobs: Job[]
    currentJob: Job | noJobSelected
    favoriteJobs: Job[]
    setFavoriteJobs: Function
    currentUsersJobs: Job[] | []
}

export interface jobPage {
    availableJobs: Job[]
    jobId: string
    currentJob: Job | noJobSelected
    favoriteJobs: Job[] | []
    setFavoriteJobs: Function
}
// availableJobs={ availableJobsList } jobId={ jobId } favoriteJobs={ favoriteJobs } currentJob={ currentJob } setFavoriteJobs

export interface IntrinsicElements {
    [elemName: string]: any;
}

export interface header {
  isHome: boolean;
}

export interface optionsPage {
    userId: number;
    availableJobs: object[];
}

export interface jobsContainer {
    availableJobs: Job[]
    userId: number
    setCurrentJob: Function
    currentUserJobs: Job[] | []
}

export interface BathroomInfo {
    numBathrooms: number
    toiletsPerBathroom: number
    sinksPerBathroom: number
}

export interface rateJobForm {
    currentJob: Job | noJobSelected
    currentUsersJobs: Job[] | []
    favoriteJobs: Job[] | []
    setCurrentJob: Function
    setFavoriteJobs: Function
    setCompletedJobs: Function
    setCurrentUsersJobs: Function
}

// export interface IntrinsicElements {
//     src: string
//     disabled: boolean
// }

