import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render () {
        return (
            <div className='footer-main-container'>
                <div className='footer-contact-container'>
                    <div className='social-media-links-container'>
                        <a href="https://www.instagram.com/north.losgatos/">
                            <img className='instagram' src="http://www.yenstudio.co.uk/wp-content/uploads/2017/06/instagram-logo-white-300x300.png" alt=""/>
                        </a>
                        <a href="https://www.facebook.com/north.losgatos">
                            <img className='facebook' src="https://www.ameswessex.com/wp-content/uploads/2017/05/facebook-logo-png-white-i6-300x300.png" alt=""/>
                        </a>
                        <a href="mailto:info@north-losgatos.com">
                            <img className='email' src="https://www.stickpng.com/assets/images/584856b4e0bb315b0f7675ac.png" alt=""/>
                        </a>
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
                <div className='footer-right-side-main-container'>
                    <div>
                        <a className='reserve-now-button' href="https://www.yelp.com/reservations/north-los-gatos?from_reserve_now=1">Reserve Now</a>
                    </div>
                    <div className='footer-contact-header'>
                        HOURS
                    </div>
                    <div className='footer-contact-body'>
                        Tuesday - Friday / 11am-2:30pm, 5pm-10pm
                    </div>
                    <div className='footer-contact-body'>
                        Saturday / 11:30am-3pm, 5pm-10pm
                    </div>
                    <div className='footer-contact-body'>
                        Sunday / 11:30am-3pm, 5pm-9pm
                    </div>
                </div>
            </div>
        )
    }
};

export default Footer;