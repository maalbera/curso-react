import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import { videoList } from './constants';

class SingleVideoPage extends Component {

    findVideo = () => {
        return videoList.find(item => {
            return item.id === parseInt(this.props.match.params.id)
        })
    };


    render() {
        const video = this.findVideo();

        return (
            <div className="container">
                <Header />
                <img src="http://via.placeholder.com/640x360" alt="video" />
                <h4>{video.title}</h4>
                <p>{video.desc}</p>
            </div>
        )
    }
}

export default withRouter(SingleVideoPage);