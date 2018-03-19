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
                <header className="my-header">
                    <div className="logo">
                        <img src="https://s3-us-west-2.amazonaws.com/svgporn.com/logos/youtube.svg"
                             alt=""
                             width="200"
                        />
                    </div>
                    <h1 className="title">YOUTUBE</h1>
                </header>
                <section>
                    <div></div>
                    <h2></h2>
                    <p></p>
                </section>
                <aside>
                    <ul>
                        <li>
                            <img src="http://via.placeholder.com/270x135" alt="mimi" />
                        </li>
                    </ul>
                </aside>
            </div>
        );
    }
}

export default App;
