import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

 class StreamCreate extends React.Component{
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render(){
    return (
      <div>
        <h4>Create a stream</h4>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(null, {createStream})(StreamCreate);
