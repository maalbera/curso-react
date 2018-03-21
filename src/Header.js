import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import SearchBar from './SearchBar';

class Header extends Component {
    render() {
        return (
            <header className="my-header">
                <div className="logo">
                    <NavLink to="/">
                        <img src="https://s3-us-west-2.amazonaws.com/svgporn.com/logos/youtube.svg"
                             alt=""
                             width="200"
                        />
                    </NavLink>
                    <br />
                    <h4 className="title">YOUTUBE</h4>
                </div>
                <SearchBar />
            </header>
        )
    }
}

export default Header;