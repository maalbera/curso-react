import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import AboutPage from './AboutPage';
import SingleVideoPage from './SingleVideoPage';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/video/:id" component={SingleVideoPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;