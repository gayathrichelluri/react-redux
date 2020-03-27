import React from 'react';
import {connect} from 'react-redux';
import { signIn, signOut } from  '../actions';

class GoogleAuth extends React.Component{

  componentDidMount(){
    //load client auth2, after auth2 is loaded initialize the client by providing clienId and the scope
    window.gapi.load('client: auth2',()=>{
      window.gapi.client.init({
        clientId: '200271413323-7db7o6li1p1h6v2b2hdagqu1tv0f3e7s.apps.googleusercontent.com',
        scope: 'email'
      }).then(()=>{
        this.auth=window.gapi.auth2.getAuthInstance();

        //calling onAuthChange by passing the (signIn state) to update when the user first loads the page
        this.onAuthChange(this.auth.isSignedIn.get());

        //using listen we see if the user is logged in or logged out, without refreshing each and everytime
        //listen for changes in the current user's sign-in state. and
        //onAuthChange -- A function that takes a boolean value.
        //listen() passes true to this function when the user signs in, and false when the user signs out.
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  //handles the redux store changes
  onAuthChange = (isSignedIn) => {
    if(isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuth = () => {
    if(this.props.isSignedIn === null){
        return null;
    } else if(this.props.isSignedIn){
        return (
          <button onClick={this.onSignOutClick} className="ui red google button">
            <i className="google icon"/>
            Logout
          </button>
        );
    } else {
        return (
          <button onClick={this.onSignInClick} className="ui green google button">
            <i className="google icon"/>
            Login with Google
          </button>
        );
    }
  }

  render(){
    return (
      <div>
        {this.renderAuth()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state.auth);
  return {isSignedIn: state.auth.isSignedIn};
}

export default connect(
  mapStateToProps,
  { signIn, signOut }
)( GoogleAuth );
