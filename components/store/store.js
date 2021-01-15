import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers';

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(promiseMiddleware))
);

export default store;
