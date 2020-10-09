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
            <div className="PortfolioOpacityLayer">
                <div className="PortfolioHeader">
                    <h1>Projects</h1>
                </div>
                <div className="ProjectContainer">
                    <Row className="ProjectRow" xs="1" md="1" lg="2">
                        {projectData.map((data) => (
                            <Col className="Project" key={data.title}>
                                <img 
                                    src={require(`../../imgs/${data.image}`)}
                                />
                            </Col>
                        ))}
                    </Row>   
                </div> 
            </div>          
        </div>
    )
}

export default PortfolioPage;