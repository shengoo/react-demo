import {createStore, applyMiddleware, compose} from 'redux'
//import thunk from 'redux-thunk'
//import { createLogger } from 'redux-logger'
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import reducer from './reducers'
const history = createHistory();
//const middleware = routerMiddleware(history);

const middleware = [routerMiddleware(history)];//[ thunk ]
if (process.env.NODE_ENV !== 'production') {
        // middleware.push(createLogger())
}

export default createStore(
    reducer,
    window.__PRELOADED_STATE__,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

    )
);
