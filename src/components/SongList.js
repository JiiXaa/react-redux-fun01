import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
// selectSong is just a normal js function, you can call anywhere! But that action never go to redux store. You need to use dispatch!
// That is why we passed selectSong to connect(), and connect sends data automatically to dispatch for us

const SongList = ({ songsData, favoriteSong, selectSong }) => {
  console.log(songsData);
  console.log(selectSong);
  return (
    <div className='ui divided list'>
      {songsData.map((song) => (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              onClick={() => selectSong(song)}
              className='ui button primary'
            >
              Select
            </button>
          </div>
          <div className='content'>
            {song.title}
            {song.title === favoriteSong ? (
              <b className='pink'>Favorite!</b>
            ) : (
              ''
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  // this always update state when it changes (by clicking button for example)
  console.log(state);
  return {
    songsData: state.songsData.songs,
    favoriteSong: state.songsData.favoriteTitle,
  };
};

export default connect(mapStateToProps, {
  selectSong,
})(SongList);

// function connectSyntaxExample() {
//   return function () {
//     return 'Hi there!';
//   };
// }

// console.log(connectSyntaxExample()());
