import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ mySelectedSong }) => {
  console.log('song detail: ', mySelectedSong);

  if (!mySelectedSong) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h4>Details for:</h4>
      <p>Title: {mySelectedSong.title}</p>
      <p>Duration: {mySelectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
