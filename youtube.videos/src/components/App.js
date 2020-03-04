import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component{
  state = { videos : [] , selectedVideo: null};
  //adding a default search term, so that when the app opens we dont see a empty screen
  componentDidMount(){
    this.onSearchSubmit('buildings');
  }

  onSearchSubmit = async (term)=>{
    const response = await youtube.get('/search', {
      params:  {
        q: term
      }
    });

    this.setState({videos: response.data.items});
    //setting the selected video as the first video from the list, so that it shows intead a blank left side
    this.setState({selectedVideo: response.data.items[0]});
  }

  //call back function-- video will be updated from VideoItem.js
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render(){
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="ui eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="ui five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
