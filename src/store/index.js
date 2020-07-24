import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


import mainReducer from './reducers/mainReducer';


// A middleware for restoring the state from the sessionStorage 
import {getSavedSession, sesionSaver} from './middlewares/sessionMiddleware';


const savedSession = getSavedSession();


const store = createStore(
    combineReducers({
        mainState: mainReducer
    }),
    savedSession ? savedSession : undefined, // in case of undefined the sessionReducer() gets a default value
    applyMiddleware(thunk, sesionSaver),
);


export default store;