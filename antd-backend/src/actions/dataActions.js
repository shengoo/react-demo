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

    fetchDetailRequest(payload) {
        return {
            type: ActionTypes.FETCH_DETAIL_REQUEST,
            payload,
        }
    },
    fetchDetailFailed(payload){
        return {
            type: ActionTypes.FETCH_DETAIL_FAILURE,
            payload,
        };
    },
    fetchDetailSuccess(payload) {
        return {
            type: ActionTypes.FETCH_DETAIL_SUCCESS,
            payload,
        };
    },
};

export default actions;