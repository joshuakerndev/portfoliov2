import React from 'react';

import { Row, Col } from 'reactstrap';
import { 
    Card, 
    CardBody, 
    Button, 
    CardTitle, 
    CardText, 
    CardImg,
    CardGroup 
} from 'reactstrap';


import "./PortfolioPage.scss";
import PORTFOLIO_DATA from '../../data/portfolio.data';

const PortfolioPage = () => {

    const projectData = PORTFOLIO_DATA;

    return (
        <div className="PortfolioPage" id="Portfolio">
            <div className="PortfolioHeader">
                <h1>Projects</h1>
            </div>
            <div className="ProjectContainer">
                <CardGroup className="ProjectRow">
                    {projectData.map((data) => (
                        <Card className="Project" key={data.title}>
                            <CardImg 
                                top
                                width="100%"
                                src=
                            />
                        </Card>
                    ))}
                </CardGroup>   
            </div>           
        </div>
    )
}

export default PortfolioPage;