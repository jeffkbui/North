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
                        <a href='https://s3-us-west-1.amazonaws.com/north-losgatos.com/LUNCH5.19_Layout+1.pdf' className='menu-item-container'>
                            <img className='menu-item-image' src="https://s3-us-west-1.amazonaws.com/north-losgatos.com/08.jpg" alt="lunch-menu"/>
                            <div className='menu-item-title'>LUNCH</div>
                        </a>
                        <a href='https://s3-us-west-1.amazonaws.com/north-losgatos.com/BRUNCH10.19.pdf'  className='menu-item-container'>
                            <img className='menu-item-image' src="https://s3-us-west-1.amazonaws.com/north-losgatos.com/07.jpg" alt=""/>
                            <div className='menu-item-title'>WEEKEND BRUNCH</div>
                        </a>
                    </div>
                    <div className='menu-body-content-container'>
                        <a href='https://s3-us-west-1.amazonaws.com/north-losgatos.com/Dinner_Menu.pdf'  className='menu-item-container'>
                            <img className='menu-item-image' src="https://s3-us-west-1.amazonaws.com/north-losgatos.com/05.jpg" alt=""/>
                            <div className='menu-item-title'>DINNER</div>
                        </a>
                        <a href='https://s3-us-west-1.amazonaws.com/north-losgatos.com/WineList10.2019_Layout+1.pdf'  className='menu-item-container'>
                            <img className='menu-item-image' src="https://s3-us-west-1.amazonaws.com/north-losgatos.com/09.jpg" alt=""/>
                            <div className='menu-item-title'>DRINKS</div>
                        </a>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Menu;