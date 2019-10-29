import React from 'react';
import ContactNavBar from './ContactNavBar';

class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <ContactNavBar/>
                <h1 className='contact-main-container'></h1>
            </div>
        );
    }
}

export default ContactUs;