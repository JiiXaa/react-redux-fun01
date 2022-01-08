import { combineReducers } from 'redux';

const songsReducer = () => {
  return {
    songs: [
      { title: 'Venom', duration: '4:25' },
      { title: 'Shekini', duration: '3:39' },
      { title: 'Me Party', duration: '3:15' },
      { title: 'Love Me', duration: '1:45' },
    ],
    favoriteTitle: 'Venom',
  };
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songsData: songsReducer,
  selectedSong: selectedSongReducer,
});
