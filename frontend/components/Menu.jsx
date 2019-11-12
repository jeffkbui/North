import React from 'react';
import MenuNavBar from './MenuNavBar';
import Footer from './Footer';

class Menu extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className='menu-main-container'>
                <MenuNavBar/>
                <div className='menu-body-main-container'>
                    <div className='menu-body-content-container'>
                        <div className='menu-item-container'>
                            <img className='menu-item-image' src="https://s3-us-west-1.amazonaws.com/north-losgatos.com/08.jpg" alt="lunch-menu"/>
                            <div className='menu-item-title'>LUNCH</div>
                        </div>
                        <div className='menu-item-container'>
                            <img className='menu-item-image' src="https://s3-us-west-1.amazonaws.com/north-losgatos.com/07.jpg" alt=""/>
                            <div className='menu-item-title'>WEEKEND BRUNCH</div>
                        </div>
                    </div>
                    <div className='menu-body-content-container'>
                        <div className='menu-item-container'>
                            <img className='menu-item-image' src="https://s3-us-west-1.amazonaws.com/north-losgatos.com/05.jpg" alt=""/>
                            <div className='menu-item-title'>DINNER</div>
                        </div>
                        <div className='menu-item-container'>
                            <img className='menu-item-image' src="https://s3-us-west-1.amazonaws.com/north-losgatos.com/09.jpg" alt=""/>
                            <div className='menu-item-title'>DRINKS</div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Menu;