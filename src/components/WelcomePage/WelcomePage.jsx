import React from 'react';
import Typewriter from 'typewriter-effect';

import "./WelcomePage.scss";

const WelcomePage = () => {
    return (
        <div className="WelcomePage">
            <div className="TypewriterContainer">
            <Typewriter
                className="WelcomeText"
                onInit={(typewriter) => {
                    typewriter
                    .typeString('Hello.')
                    .pauseFor(1500)
                    .typeString(' I am Joshua, the creator.')
                    .pauseFor(1000)
                    .deleteChars(8)
                    .typeString('thinker.')
                    .pauseFor(1500)
                    .deleteChars(8)
                    .typeString('developer.')
                    .start();
                }}
            />
            </div>
        </div>
    )
}

export default WelcomePage;