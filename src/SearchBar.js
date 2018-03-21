import React, { Component, Fragment } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <Fragment>
                <input type="text" className="search" placeholder="Inserte texto" />
                <button className="search-submit">Buscar</button>
            </Fragment>

        )
    }
}

export default SearchBar;