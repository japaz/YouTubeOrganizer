import { combineReducers } from 'redux';
import fuelSavingsAppState from './fuelSavings';
import YouTubeAppState from './YouTubeReducer';

const rootReducer = combineReducers({
  fuelSavingsAppState,
  YouTubeAppState
});

export default rootReducer;
