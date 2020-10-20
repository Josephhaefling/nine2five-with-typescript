import React from "react"

interface jobPage {
    availableJobs: Job[]
    jobId: any
}

interface Job {
    employeeId: number
    breakroomInfo: number
    businessName: string
    jobDate: string
    jobId: string
}

const JobPage : React.FC <jobPage> = (props) : JSX.Element => {
    const { jobId, availableJobs } = props
    
    

    return (
        <section>
            <h1>Hi I am the job page!</h1>
        </section>
    )
}
    
export default JobPage