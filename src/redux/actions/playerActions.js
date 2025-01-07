// playerActions.js
import { SET_CURRENT_SONG, SET_PLAYING_SONG } from './actionTypes';

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song
});

export const setPlayingSong = (song) => ({
  type: SET_PLAYING_SONG,
  payload: song
});
