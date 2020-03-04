import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from'./Spinner';

/* const App = () => {
  {/*Here, position and err are arguments --
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return(
    <div>Latitude: </div>
  );
}; */

class App extends React.Component{
  //constructor is called before any other function is called,
  //we use it so that we can intialize thr state property
  //Alternative and the recommended besides constructor is 'componentDidMount' function
  /*constructor(props){
    super(props); //acquiring superclass properties (React.Component)
    //THIS IS THE ONLY PLACE WHERE WE DO DIRECT ASSIGNEMENT TO this.state.
    this.state={lat: null, errorMessgage: {}};

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //to update, change or manipulate the state object, we should use 'setState'
        this.setState({lat: position.coords.latitude});
      },
      err => {
        this.setState({errorMessage: err.message});
      }
    );
  }*/

  state={lat: null, errorMessage: ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //to update, change or manipulate the state object, we should use 'setState'
        this.setState({lat: position.coords.latitude});
      },
      err => {
        this.setState({errorMessage: err.message});
      }
    );
  }

  //Helper method
  renderContent() {
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if(!this.state.errorMessage && this.state.lat){
      return <div><SeasonDisplay lat={this.state.lat}/></div>;
    }
    return <Spinner message="Please accept location request"/>;
  }

  //react says we have to define render
  render(){
    return (
      <div>{this.renderContent()}</div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
