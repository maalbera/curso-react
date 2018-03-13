import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Button from './Button';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'no clickeado'
        }
    }

    onClick = () => {
        this.setState({
            buttonText: 'Clickeado!!!'
        });
    };

    clickHandler = () => {
        alert('Clicked!');
    };

    render() {
        return (
            <div className="App">
                <Header title="Bienvenidos" showIcon={true} />

                <Button title="My Component" clickHandler={this.onClick} />

                <button onClick={this.onClick}>{this.state.buttonText}</button>

                <Navigation />
                div
            </div>
        );
    }
}

export default App;
