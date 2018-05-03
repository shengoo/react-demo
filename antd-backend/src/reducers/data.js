import ActionTypes from '../actions/ActionTypes';

const initialState = {
    isFetching : false,
    isFailed: false,
    items: [],
    details: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_DATA_REQUEST:
            return {
                ...state,
                isFetching: true,
                isFailed: false,
            };
        case ActionTypes.FETCH_DATA_FAILURE:
            return {
                ...state,
                isFailed: true,
                isFetching: false,
            };
        case ActionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isFailed: false,
                items: state.items.concat(action.payload),
            };

        case ActionTypes.FETCH_DETAIL_REQUEST:
            const details = state.details.slice(0);
            return {
                ...state,

            };
        case ActionTypes.FETCH_DETAIL_FAILURE:
            return {
                ...state,
            };
        case ActionTypes.FETCH_DETAIL_SUCCESS:
            return {
                ...state,
                details: state.details.concat(action.payload),
            };

        default:
            return state;
    }
}
