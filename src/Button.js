import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'green'
        }
    }

    onClick = () => {
        this.setState({
            color: 'red'
        });

        if (this.props.clickHandler) {
            this.props.clickHandler();
        }
    };

    render() {
        return (
            <button onClick={this.onClick} style={{ backgroundColor: this.state.color }}>{this.props.title}</button>
        )
    }
}

export default Button;