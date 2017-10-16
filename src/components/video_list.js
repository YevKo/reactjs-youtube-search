/**
 * Created by yevko on 16/10/2017.
 */
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

    return(
        <div className="small-12 medium-4 columns">
            <ul className="list-group">
                {videoItems}
            </ul>
        </div>
    );
};

export default VideoList;
