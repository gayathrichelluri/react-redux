import React from 'react';
import StreamForm from './StreamForm';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchStream,editStream} from '../../actions';

class StreamEdit extends React.Component{
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
      this.props.editStream(formValues, this.props.match.params.id);
  };

  render(){

    console.log(this.props.stream);
    return (
      <div>
        <h4>Edit a stream</h4>
        <StreamForm
          initialValues={_.pick(this.props.stream,'title','description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps,{
  fetchStream,
  editStream
})(StreamEdit);
