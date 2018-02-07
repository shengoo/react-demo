import ActionTypes from './ActionTypes';

const actions = {
    fetchDataRequest() {
        return {
            type: ActionTypes.FETCH_DATA_REQUEST
        }
    },
    fetchDataFailed(){
        return {
            type: ActionTypes.FETCH_DATA_FAILURE,
        };
    },
    fetchDataSuccess(payload) {
        return {
            type: ActionTypes.FETCH_DATA_SUCCESS,
            payload,
        };
    },
};

export default actions;