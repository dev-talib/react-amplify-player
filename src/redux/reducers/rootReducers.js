// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from '../reducers/authReducer';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  player: playerReducer,
});

export default rootReducer;
