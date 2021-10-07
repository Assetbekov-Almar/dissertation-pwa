import React from 'react';
import './style.css'
import {handleClick} from "./functions";

const Navigation = () => {
    const navigationList = ['Home', 'News', 'Contact', 'About'];
    return (
        <div className="navigation-wrapper">
            <ul className="navigation">
                {navigationList.map((item, index) =>
                    <li key={index}><a onClick={handleClick}>{item}</a></li>
                )}
            </ul>
        </div>
    )
};

export default Navigation;