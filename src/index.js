import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/videoList';
import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyAJSS28HZ7w7dkQTs5flYCu8PzqNqb_Pu4';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YTSearch({
            key: API_KEY,
            term: 'test'
        }, (videos) => {
            this.setState({videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));