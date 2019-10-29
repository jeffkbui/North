import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Menu from './Menu';
import ContactUs from './ContactUs';

const App = () => (
    <div>
        <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/menu" component={Menu}/>
                <Route exact path="/contact" component={ContactUs}/>
        </Switch>
    </div>
);

export default App;