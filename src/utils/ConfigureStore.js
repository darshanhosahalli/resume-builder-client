import { createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk';
import reducers from './CombineReducer';
import CustomMiddleware from '../middleware';

const configureStore = () => {

    const intialState = {};

    const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducers,
        intialState,
        composeEnhancers(applyMiddleware(thunk, CustomMiddleware)),
    );

    return store;
}

export default configureStore;