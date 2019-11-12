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
                <h1 className='contact-main-container'></h1>
                <Footer/>
            </div>
        );
    }
}

export default ContactUs;