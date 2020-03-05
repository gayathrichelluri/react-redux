import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
  if(!song){
    return <div>Select a song!</div>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        <b>Title:</b> {song.song.title}
        <br />
        <b>Duration:</b> {song.song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.selectedSong);
  return {song: state.selectedSong };
}


export default connect(mapStateToProps)(SongDetail);
