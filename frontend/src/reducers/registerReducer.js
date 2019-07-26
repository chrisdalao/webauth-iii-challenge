import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "../actions";

const initialState = {
    user: [],
    error: ""
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
            return {
                ...state,
                error: "",
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}