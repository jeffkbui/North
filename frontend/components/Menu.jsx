import React from 'react';
import MenuNavBar from './MenuNavBar';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <MenuNavBar/>
                <h1 className='menu-main-container'></h1>
            </div>
        );
    }
}

export default Menu;