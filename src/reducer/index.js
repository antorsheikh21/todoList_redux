import todoReducer from './todo';

import {combineReducers } from 'redux';

 const rootReducer=combineReducers({
    todoReducer
})


export default rootReducer