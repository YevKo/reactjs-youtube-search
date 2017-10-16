/**
 * Created by yevko on 16/10/2017.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCqc0u98SF5dhSABv0QrsuM9CvwqnivieQ';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [] ,
            selectedVideo: null
        };

        // Youtube API call
        YTSearch({key: API_KEY, term: 'aurora'}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
