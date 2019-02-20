import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Events from './components/Events/Events';
import Thanks from './components/Thanks/Thanks';

export default (
    <HashRouter>
        <Switch>
            <Route exact path = '/' component = { Home } />
            <Route path ='/about' component = { About } />
            <Route path = '/contact' component = { Contact } />
            <Route path = '/events' component = { Events } />
            <Route path = '/thanks' component = { Thanks } />
            
        </Switch>
    </HashRouter>
)
