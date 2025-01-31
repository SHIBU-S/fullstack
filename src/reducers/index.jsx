import { combineReducers } from 'redux';
import counterReducer from '../Counter';

const allReducers = combineReducers({
    user: counterReducer
});

export default allReducers;
