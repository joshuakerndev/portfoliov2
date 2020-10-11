import React from 'react';

import './ContactPage.scss';

const ContactPage = () => {
    return (
        <div className="ContactPage" id="Contact">
            <div className="ContactHeader">
                <h1>Contact</h1>
            </div>

            <div className="ContactInfo">
                <span>Email:</span>
                <p>joshuakerndev@gmail.com</p>
                <span>Phone:</span>
                <p>(626)342-5550</p>
                <div className="SocialMediaLinks">
                    <span>
                        <a 
                            href="https://github.com/joshuakerndev"
                            target="_blank"
                        >
                            <img 
                                src={require("../../imgs/GitHub-Mark-Light-32px.png")} 
                            />
                        </a>
                    </span>
                    <span>
                        <a 
                            href="https://www.linkedin.com/in/joshua-kern-99bb031b4/"
                            target="_blank"
                        >
                            <img 
                                className="LinkedInIcon" 
                                src={require("../../imgs/Linked-In-White.png")} 
                            />                        
                        </a>
                    </span>
                </div>
            </div>

            <div className="ContactFooter"></div>
        </div>
    )
}

export default ContactPage;