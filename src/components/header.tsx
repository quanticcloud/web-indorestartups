import React from 'react'

const Header = () => (
    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner"
         className="v3-nav w-nav">
        <div className="v3-nav-bar w-container">
            <a href="/" data-event-category="Navigation" data-event-action="Navigation item clicked"
               data-event-label="Logo" aria-current="page" className="v3-nav-logo w-nav-brand w--current" aria-label="home">
                
                Indore Startups
            </a>
            <nav role="navigation" className="v3-nav-main-links w-nav-menu">
                

            </nav>
            <div className="v3-nav-burger-menu w-nav-button" aria-label="menu" role="button"
                 aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
                <div className="w-icon-nav-menu"></div>
            </div>
        </div>
        <div className="v3-nav-shadow"></div>
        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
    </div>
);

export default Header
