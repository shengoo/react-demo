import ActionTypes from '../actions/ActionTypes';

const initialState = {
    menuCollapsed : false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.COLLAPS_MENU:
            return {
                ...state,
                menuCollapsed: !state.menuCollapsed
            };
        default:
            return state;
    }
}
