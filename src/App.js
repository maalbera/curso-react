import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';

class App extends Component {



    render() {
        return (
            <div className="App">
                <Header title="Bienvenidos" showIcon={true} />
                <Navigation />
            </div>
        );
    }
}

export default App;
