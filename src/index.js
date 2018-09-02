import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
//Create a new component that produce some component.

const API_KEY = 'AIzaSyBp-kJhrq688ATlrD7sMR4SG5TvaqCA88E';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = 
    {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'Human'}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  } 

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList 
          videos = {this.state.videos}
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})} 
        />
      </div>
    );
  }    
}

//Take this component geneated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));