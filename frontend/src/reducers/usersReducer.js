import {
    GETALLUSERS_START,
    GETALLUSERS_SUCCESS,
    GETALLUSERS_FAILURE,
} from '../actions';

const initialState = {
    users: [],
    error: ""
}


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLUSERS_START:
            return {
                ...state,
                error: "",
            }
        case GETALLUSERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
            }
        case GETALLUSERS_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}