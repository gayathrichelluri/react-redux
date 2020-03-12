import React from 'react';
import {connect} from 'react-redux';

class UserHeader extends React.Component{
  render(){
    const {user} = this.props;

    //if no user is found in the state
    if(!user){
      return null;
    }

    return (
      <div className="header">
        {user.name}
      </div>
    );
  }
}

//we can also pass ownProps to reference the props objects sent to the components
const mapStateToProps = (state, ownProps) => {
  return {user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProps)(UserHeader);
