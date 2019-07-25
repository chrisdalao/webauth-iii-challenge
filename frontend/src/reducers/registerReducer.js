import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "../actions";

const initialState = {
    user: [],
    creatingUser: false,
    error: ""
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
            return {
                ...state,
                error: "",
                creatingUser: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                creatingUser: false
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload,
                creatingUser: false
            }
        default:
            return state;
    }
}