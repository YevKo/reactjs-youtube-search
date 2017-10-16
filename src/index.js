/**
 * Created by yevko on 16/10/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCqc0u98SF5dhSABv0QrsuM9CvwqnivieQ';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
