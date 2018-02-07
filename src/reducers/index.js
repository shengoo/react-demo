import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import menuReducer from './menuReducer';
import user from './user';

const rootReducer = combineReducers({
    router: routerReducer,
    menuReducer,
    user
});

export default rootReducer;
// export default routerReducer;