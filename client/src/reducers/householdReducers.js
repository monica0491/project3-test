import {HOUSEHOLD_LIST_REQUEST, HOUSEHOLD_LIST_SUCCESS, HOUSEHOLD_LIST_FAIL} from '../constants/householdConstants';

function householdListReducer(state= {}, action) {
    switch(action.type){
        case HOUSEHOLD_LIST_REQUEST:
            return {loading: true, products: []};
        case HOUSEHOLD_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case HOUSEHOLD_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export {householdListReducer};