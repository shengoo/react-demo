import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
    router: routerReducer,
    menuReducer,
});

export default rootReducer;
// export default routerReducer;