import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers';
import { createWrapper } from 'next-redux-wrapper';

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(promiseMiddleware))
);



// create a makeStore function
const makeStore = (context) => store;

// export an assembled wrapper
const wrapper = createWrapper(makeStore, {debug: true});
export {
    store,
    wrapper
};
