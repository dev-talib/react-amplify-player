// playerReducer.js
import { SET_CURRENT_SONG, SET_PLAYING_SONG } from '../actions/actionTypes';

const initialState = {
  currentSong: null,
  playingSong: null
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload
      };
    case SET_PLAYING_SONG:
      return {
        ...state,
        playingSong: action.payload
      };
    default:
      return state;
  }
};

export default playerReducer;
