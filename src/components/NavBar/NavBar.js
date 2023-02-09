import React from "react";
import './NavBar.css'
//import igpic from './images/Instagramx.jpg';

function NavBar(props) {
    return (
        <div className="nav-bar">
            <header className="header-container">
                <em className="ig">Instagram </em>
                <input className="search" type="text" placeholder="Search.."></input>
                <div>
                    <img className='igpic' src='/images/Instagramx.jpg' alt="oh"></img>
                    <img className='igpic' src='/images/Instagramx.jpg' alt="no"></img>
                </div>
            </header>
        </div>
    )
}

export default NavBar;