import React from 'react'
import { Link } from 'react-router-dom'
import { optionsPage } from "../home-data"


const OptionsPage : React.FC <optionsPage> = (props) => {    

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