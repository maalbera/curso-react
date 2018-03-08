import React, { Component } from 'react';

import logo from './logo.svg';

class Header extends Component {
    renderIcon = () => {
        if (!this.props.showIcon) {
            return null
        }
        return <img src={logo} className="App-logo" alt="logo" />
    };

    render() {
        return (
            <header className="App-header">
                {this.renderIcon()}
                <h1 className="App-title">{this.props.title || "Este es el titulo"}</h1>
            </header>
        )
    }
}

export default Header;