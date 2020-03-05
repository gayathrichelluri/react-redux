import {combineReducers} from 'redux';

const songReducer = () => {
  return [
    {title: 'Samajavaragamana', duration: '4:05'},
    {title: 'Butta Bomma', duration: '3:58'},
    {title: 'Neeli Neeli Akaasham', duration: '4:10'},
    {title: 'Mind Block', duration: '3:40'}
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if(action.type === 'SONG_SELECTED'){
      return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
