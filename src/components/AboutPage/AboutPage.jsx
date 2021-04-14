import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';
import { Row, Col } from 'reactstrap';

import './AboutPage.scss';

const AboutPage = () => {
    return (
        <div className="AboutPage" id="About">
            <div className="AboutHeader">
                <h1>ABOUT ME</h1>
            </div>
            <Row className="AboutContent" xs="1" sm="2">
                <Col className="PictureOfMe" xs="12" sm="4">
                    <img 
                        src={require("../../imgs/profileforportfolio.jpg")}
                        alt="Me"
                    />
                </Col>
                <Col className="BriefBio" xs="12" sm="8">
                    <p>
                        I develop front-end or full-stack applications in Las Vegas, NV, or remotely.
                        I'm interested in working with motivated teams to bring designs to life with
                        precision.
                        <br /><br /> 
                        I enjoy learning new technology, and I adapt quickly to the needs
                        of my clients to deliver intuitive and responsive UI functionality. 
                        <br /><br />
                        I am also
                        an audio engineer and avid music enthusiast who loves a good chat. Feel free
                        to <Link smooth to="/#Contact">contact me</Link> for a copy of my resume.
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default AboutPage;