import React from 'react';
import { Link } from 'react-router-dom';

class MenuNavBar extends React.Component {
    render() {
        return (
            <div className='home-navbar-main-container'>
                <Link to='/'>
                    <img className='navbar-main-logo' src="https://s3-us-west-1.amazonaws.com/north-losgatos.com/LOGONOBLACKBACKGROUND.png" alt="home-logo"/>
                </Link>
                <div className='home-navbar-options-container'>
                    <Link to='/' className='menu-navbar-option-item-normal'>
                        HOME
                    </Link>
                    <Link to='/menu' className='menu-navbar-option-item-focused'>
                        MENU
                    </Link>
                    <Link to='/contact' className='menu-navbar-option-item-normal'>
                        CONTACT
                    </Link>
                </div>
            </div>
        );
    }
}

export default MenuNavBar;