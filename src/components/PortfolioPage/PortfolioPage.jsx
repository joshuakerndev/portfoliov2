import React from 'react';

import { 
    Row
} from 'reactstrap';

import "./PortfolioPage.scss";
import PORTFOLIO_DATA from '../../data/portfolio.data';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

const PortfolioPage = () => {

    const projectData = PORTFOLIO_DATA;

    return (
        <div className="PortfolioPage" id="Portfolio">
            <div className="PortfolioOpacityLayer">
                <div className="PortfolioHeader">
                    <h1>PROJECTS</h1>
                </div>
                <div className="ProjectContainer">
                    <Row className="ProjectRow" xs="1" md="1" lg="2">
                        {projectData.map((data) => (
                            <PortfolioItem 
                                data={data}
                                className="Project" 
                                key={data.title}
                            />
                        ))}
                    </Row>   
                </div> 
            </div>          
        </div>
    )
}

export default PortfolioPage;