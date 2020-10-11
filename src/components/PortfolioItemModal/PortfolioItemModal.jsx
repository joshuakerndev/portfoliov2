import React from 'react'

import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter 
} from 'reactstrap';

import { Link } from 'react-router-dom';

import './PortfolioItemModal.scss';

const PortfolioItemModal = ({ data, toggle, modal }) => {

    const { 
        title, 
        image, 
        url, 
        description, 
        features, 
        whatILearned, 
        thingsToDo 
    } = data;

    return (
        <Modal isOpen={modal} toggle={toggle} className="PortfolioItemModal">
            <ModalHeader toggle={toggle}>
                {title}
            </ModalHeader>

            <ModalBody>
                <p>
                    ** Please note, Heroku websites may take a few seconds longer than other sites to load!
                </p>
                <p className="ModalUrl">
                    <a 
                        href={url} 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {url}
                    </a>
                </p>
                <p className="ModalDescription">
                    {description}
                </p>
                <p>
                    Features:
                    <ul className="ModalList">
                        {features.map((feature) => (
                            <li>{feature}</li>
                        ))}
                    </ul>
                </p>
                <p>
                    What I Learned:
                    <ul className="ModalList">
                        {whatILearned.map((learned) => (
                            <li>{learned}</li>
                        ))}
                    </ul>
                </p>
                <p>
                    Possible Improvements:
                    <ul className="ModalList">
                        {thingsToDo.map((todo) => (
                            <li>{todo}</li>
                        ))}
                    </ul>
                </p>
                <p className="ModalContact">
                    Contact me for additional information about development, code snippets, or other ideas or questions.
                </p>

            </ModalBody>

            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Close</Button>
            </ModalFooter>
        </Modal>
    )
}

export default PortfolioItemModal;