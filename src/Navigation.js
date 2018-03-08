import React, { Component } from 'react';

import NavSection from './NavSection';

const sections = [
    {
        title: 'Recommended', links: [
            { url: '/video/1', label: 'Video 1' },
            { url: '/video/2', label: 'Video 2' }
        ]
    },
    {
        title: 'Oldies', links: [
            { url: '/oldie/1', label: 'Oldie 1' },
            { url: '/oldie/2', label: 'Oldie 2' },
        ]
    },
    {
        links: [
            { url: '/oldie/1', label: 'Oldie 1' },
            { url: '/oldie/2', label: 'Oldie 2' },
        ]
    }
];

class Navigation extends Component {
    renderSections = (sections) => {
        if (!sections) return [];

        return sections.map((item, index) => {
            return <NavSection key={index} title={item.title} links={item.links} />
        });
    };

    render() {
        return (
            <div>
                {this.renderSections(sections)}
            </div>
        )
    }
}

export default Navigation;