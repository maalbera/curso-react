import React, { Component } from 'react';

class MainVideo extends Component {
    render() {
        return (
            <section className="main-video">
                <div className="video-wrapper">
                    <img src="http://via.placeholder.com/640x360" alt="video" />
                </div>
                <h2>Video Titulo</h2>
                <p>Lorem ipsum</p>
            </section>
        );
    }
}

export default MainVideo