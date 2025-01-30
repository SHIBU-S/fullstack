// import counterReducer from './counter';
// import { combineReducers } from 'redux';

// const allReducers = combineReducers({
//     counter: counterReducer
// });

// export default allReducers;




import { combineReducers } from 'redux';
import userReducer from './counter';

const allReducers = combineReducers({
    user: userReducer
});

export default allReducers;
