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
}

export interface jobPage {
    availableJobs: Job[]
    jobId: any
}

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
}

export interface BathroomInfo {
    numBathrooms: number
    toiletsPerBathroom: number
    sinksPerBathroom: number
}

export interface rateJobForm {
    
}

// export interface IntrinsicElements {
//     src: string
//     disabled: boolean
// }

