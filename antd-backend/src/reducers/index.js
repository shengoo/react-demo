import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import menuReducer from './menuReducer';
import user from './user';
import data from './data';

const rootReducer = combineReducers({
    router: routerReducer,
    menuReducer,
    user,
    data
});

export default rootReducer;
// export default routerReducer;