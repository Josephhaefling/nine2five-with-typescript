import React from 'react'
import { JsxElement } from 'typescript'
import { Link } from 'react-router-dom'
import './Header.css'
import { IntrinsicElements, header } from "../home-data"
const userImage = require("../assets/stinkyBaby.png")
const homeImage = require("../assets/home.png")



const Header : React.FC <header> = (props) : JSX.Element  => {
const { isHome } = props    

    return (
        <header className="nav-bar">

            <h1>Nine2Five</h1>
            {isHome ? 
            <Link
            to='/options-page'
            aria-label='options page'
            style={{textDecoration: "none"}}
            >
                <section className="user-image-container">
                    <img src={ userImage } alt="options button" className="options-button" />
                </section>
            </Link> :
            <Link
                to='/'
                aria-label='home page'
                style={{textDecoration: "none"}}
            >
                <section className="user-image-container">
                    <img src={ homeImage } alt="options button" className="options-button" />
                </section>
                {/* <button className="options-button">Home</button> */}
            </Link>
             }
        
        </header>
    )
}

export default Header