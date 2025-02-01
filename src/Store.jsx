// import { createStore } from 'redux';
// import allReducers from './reducers';

// const store = createStore(allReducers);

// export default store;





import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./reducers";

export const store = configureStore(allReducers);

export default store;



