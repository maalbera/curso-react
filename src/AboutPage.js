import React, { Component } from 'react';

import Header from './Header';

class AboutPage extends Component {
    render() {
        return (
            <div className="page-container">
                <Header/>
                <h1>About Page</h1>
                <p>Lorem ipsum</p>
            </div>
        );
    }
}

export default AboutPage;