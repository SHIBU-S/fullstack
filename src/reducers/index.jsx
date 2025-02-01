// import { combineReducers } from 'redux';
// import counterReducer from '../Counter';

// const allReducers = combineReducers({
//     user: counterReducer
// });

// export default allReducers;





import counterReducer from "../Counter";

  const allReducers = {
    reducer: {
      counte_r: counterReducer,
    }
  }

export default allReducers;