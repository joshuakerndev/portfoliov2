import React, { useState } from 'react';

import "./PortfolioItem.scss";

import PortfolioItemModal from '../PortfolioItemModal/PortfolioItemModal';

import { 
    Col,
    Fade,
    Button
} from 'reactstrap';

const PortfolioItem = ({ data }) => {

    const { 
        title, 
        image, 
        url, 
        description, 
        features, 
        whatILearned, 
        thingsToDo 
    } = data;

    //useState for Fade component
    const [fadeIn, setFadeIn] = useState(false);

    const fadeInFunc = () => setFadeIn(true);
    const fadeOutFunc = () => setFadeIn(false);

    //useState for Modal component
    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    return (
            <Col 
                className="Project"
                onMouseEnter={fadeInFunc}
                onMouseLeave={fadeOutFunc}
            >
                <PortfolioItemModal 
                    data={data} 
                    toggle={toggleModal} 
                    modal={modal} 
                />
                <img 
                    src={require(`../../imgs/${image}`)}
                    alt={title}
                />
                <Fade className="LearnMoreButton" in={fadeIn}>
                    <div className="FadeContent">
                        <h3>{title}</h3>
                        <Button onClick={toggleModal}>
                            Learn More
                        </Button>
                    </div>
                </Fade>
            </Col>
    )
}

export default PortfolioItem;