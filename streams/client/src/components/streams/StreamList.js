import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchStreams} from '../../actions';

class StreamList extends React.Component{
  componentDidMount(){
    this.props.fetchStreams();
  }

  renderAdmin({userId,id}){
    if(this.props.currentUserId === userId){
      return (
        <div className="ui right floated content">
          <Link to={`/streams/edit/${id}`} className="ui primary button">Edit</Link>
          <Link to={`/streams/delete/${id}`} className="ui red button">Delete</Link>
        </div>
      );
    }
  }

  renderList(){
    return this.props.streams.map(stream => {
      return (
        <div className="item">
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera"/>
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate(){
    if(!this.props.isSignedIn){
      return <div></div>;
    }

    return (
      <Link to='/streams/new' className="ui primary button">
        Create Stream
      </Link>
    );
  }


  render(){
    return (
      <div>
        <h4>Streams</h4>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.userId
  };
};

export default connect(mapStateToProps,{fetchStreams})(StreamList);
