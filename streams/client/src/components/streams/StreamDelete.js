import React from 'react';
import {connect} from 'react-redux';
import {fetchStream, deleteStream} from '../../actions';
import {Link} from 'react-router-dom';
import history from '../../history';
import Modal from '../../modal';

class StreamDelete extends React.Component{
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  onDeleteClick = () =>{
    this.props.deleteStream(this.props.match.params.id);
  }

  renderButtons(){
    return (
      <React.Fragment>
        <button onClick={this.onDeleteClick} className="ui button negative">Delete</button>
        <Link to='/' className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent(){
    if(!this.props.stream){
      return 'Are you sure want to delete this stream';
    }
    return (
      `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
    );
  }

  render(){
    if(!this.props.stream){
      return <div></div>;
    }
    const {title,description} = this.props.stream;
    return (
      <div>
        <Modal
          title='Delete Stream'
          content= {this.renderContent()}
          actions= {this.renderButtons()}
          onDismiss = {()=>history.push('/')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {
  fetchStream,
  deleteStream
})(StreamDelete);
