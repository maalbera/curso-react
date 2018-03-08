import React from 'react';

const renderLinks = (links) => {
    if (!links) return null;

    return links.map((item, index) => {
        return <div key={index}><a href={item.url}>{item.label}</a></div>
    });
};

const NavSection = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.title}</h3>
            {renderLinks(props.links)}
        </div>
    )
};

export default NavSection;