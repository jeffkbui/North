import React from 'react';
import HomeNavBar from './HomeNavBar';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div>
                <HomeNavBar/>
                <h1 className='homepage-splash'></h1>
                <div className='home-main-body-container'>
                    <div className='home-about-text-container'>
                        <div className='north-about-title'>
                            NORTH
                        </div>
                        <p className='north-about-body'>
                            The seasonal menu showcases a variety of Vietnamese flavors and techniques in an intimate and handsomely renovated space. We feature an excellent wine list of international and California wines, as well as the best-sourced meat, seafood and produce of the season. 
                        </p>
                        <p className='north-about-body'>
                            Although our kitchen is steeped in the cooking of Vietnam, we are also thoughtful of where we are, and heavily influenced by the sensibilities of California. The bar is equally inspired, and produces handcrafted cocktails that dazzle the senses and intensify connection. 
                        </p>
                        <p className='north-about-body'>
                            NORTH’s design philosophy mirrors its deliciously unexpected approach to food and drink.
                        </p>
                    </div>
                    <div className='home-pictures-main-container'>
                        <img className='home-pic-grapefruitsalad' src="https://s3-us-west-1.amazonaws.com/north-losgatos.com/01.jpg?versionId=null" alt="food-pic-1"/>
                        <img className='home-pic-drink' src="https://s3-us-west-1.amazonaws.com/north-losgatos.com/10.jpg?versionId=null" alt="food-pic-2"/>
                        <img className='home-pic-boluclac' src="https://s3-us-west-1.amazonaws.com/north-losgatos.com/06.jpg?versionId=null" alt="food-pic-3"/>
                    </div>
                    <Link to='/menu' className='view-menus-button'>
                        VIEW MENUS
                    </Link>
                </div>
            </div>
        );
    }
}

export default Homepage;