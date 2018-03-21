import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MainVideo from './MainVideo';
import Sidebar from './Sidebar';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'no clickeado'
        }
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div className="main">
                    <MainVideo />
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default App;
