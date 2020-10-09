import React from 'react';

import "./MainPage.scss";

import AppNavbar from '../AppNavbar/AppNavbar';
import WelcomePage from '../WelcomePage/WelcomePage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';

const MainPage = () => {
    return (
        <div className="MainPage" id="Welcome">
            <AppNavbar />
            <WelcomePage />
            <PortfolioPage />
            <AboutPage />
            <ContactPage />
        </div>
    )
}

export default MainPage;