import {combineReducers} from 'redux';
import joke from './joke';
import emails from './emails';

const rootReducer = combineReducers({
  joke,
  emails,
});

export default rootReducer;
