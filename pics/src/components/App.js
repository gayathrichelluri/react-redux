import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from'./ImageList';

class App extends React.Component {
  state={images: []};
  //async-await syntax
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos',{
      params: {query: term},
    });

    /* Promise based syntax to acquire the response from API (if you use this remember to remove the ';' above)
    .then((response)=>{
      console.log(response.data.results);
    }); */
    this.setState({images: response.data.results});
  }

  render(){
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmitting={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
