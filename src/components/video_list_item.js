/**
 * Created by yevko on 16/10/2017.
 */
import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={()=> onVideoSelect(video)} className="card card-product">
            <div className="video-list card-product-img-wrapper">
                <img className="" src={imageUrl} />
            </div>

            <div className="card-section">
                <h5 className="card-product-name">{video.snippet.title}</h5>
            </div>
        </li>
    );
};

export default VideoListItem;
