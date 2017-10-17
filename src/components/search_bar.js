/**
 * Created by yevko on 16/10/2017.
 */

import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            placeholder: 'What do you wanna watch?'
        };
    }

    render() {
        return (
            <div className="search-bar row">
                <div className="small-12 columns">
                    <label>What do you wanna watch?
                        <input
                            type="search"
                            placeholder={this.state.placeholderText}
                            value = { this.state.term }
                            onChange = {event => this.onInputChange(event.target.value)} />
                    </label>
                </div>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    };
}

export default SearchBar;
