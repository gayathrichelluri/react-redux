import React from 'react';

class SearchBar extends React.Component{
  /*Example for onChange event, and also the alternative way
  onInputChange(event){
    console.log(event.target.value);
  }

  /*Example for onClick event
  onInputClick(event){
    console.log("Input was clicked");
  }
  //we use below from <input>
  <input type="text" onChange={this.onInputChange} onClick={this.onInputClick}/>

  alternative way is -
  <input type="text" onChange={(event) => console.log(event.target.value)}>
  */

  state={term: ''};

  onFormSubmit = (event) => {
    event.preventDefault();
    //sending the search term back to App component using props
    this.props.onSubmitting(this.state.term);    
  }

  render(){
    return(
      <div className="ui inverted segment">
        <form onSubmit={this.onFormSubmit} className="ui inverted form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e)=> this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
