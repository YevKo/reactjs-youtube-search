/**
 * Created by yevko on 16/10/2017.
 */
import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;

    return (
        <div className="video-detail small-12 medium-8 columns">
            <div className="radius bordered shadow card">
                <div className="responsive-embed">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="details card-section">
                    <h4>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;
