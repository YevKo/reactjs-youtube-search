/**
 * Created by yevko on 16/10/2017.
 */
import React from 'react';

const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <img className="media-object" src={imageUrl} />
            </div>

            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </li>
    );
};

export default VideoListItem;
