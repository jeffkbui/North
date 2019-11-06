import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render () {
        return (
            <div className='footer-main-container'>
                <div className='footer-contact-container'>
                    <div className='social-media-links-container'>
                        Social Media Links
                    </div>
                    <div className='footer-contact-header'>
                        CONTACT
                    </div>
                    <div className='footer-contact-body'>
                        133 N. Santa Cruz Ave.
                    </div>
                    <div className='footer-contact-body'>
                        Los Gatos, CA 95030
                    </div>
                    <div className='footer-contact-body'>
                        408-884-8309
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
};

export default Footer;