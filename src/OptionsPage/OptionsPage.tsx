import React from 'react'
import { Link } from 'react-router-dom'


interface OptionsPage {
    userId: number;
    availableJobs: object[];
}

const OptionsPage : React.FC <OptionsPage> = (props) => {    

    return (
        <section>
            <p>Welcome back Michael!</p>
            {/* <image></image> */}
            <Link
                to='/completed-jobs'
            >
                <button>Completed Jobs</button>
            </Link>
            <Link
                to='/make-schedule'
            >
                <button>Make Schedule</button>
            </Link>
            <Link
                to='favorite-jobs'
                >
                <button>Favorite Jobs</button>
            </Link>

        </section>
    )
}

export default OptionsPage