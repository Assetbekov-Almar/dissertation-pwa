import React from "react";
import './style.css'

const PageInfo = () => {
    return (
        <div className="page-info-wrapper">
            <div className="page-info" id="Home" data-testid="home-info">Something about home</div>
            <div className="page-info" id="News" data-testid="news-info">Something about news</div>
            <div className="page-info" id="Contact" data-testid="contact-info">Something about contact</div>
            <div className="page-info" id="About" data-testid="about-info">Something about about</div>
        </div>
    )
}

export default PageInfo;