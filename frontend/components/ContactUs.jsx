import React from 'react';
import ContactNavBar from './ContactNavBar';
import Footer from './Footer';

class ContactUs extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <ContactNavBar/>
                <div className='contact-main-container'>
                    <div className='contact-body-container'>
                        <div className='contact-body-title'>
                            CONTACT
                        </div>
                        <div className='contact-body-item-1'>
                            Have a question?
                        </div>
                        <div className='contact-body-item'>
                            Give us a call at 408-884-8309
                        </div>
                        <div className='contact-body-item'>
                            Or send us an email at info@north-losgatos.com
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ContactUs;