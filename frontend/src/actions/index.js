import { axiosWithAuth } from "../utils/axiosWithAuth";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const register = user => dispatch => {
    dispatch({ type: REGISTER_START });
    return axiosWithAuth()
        .post("/auth/register", user)
        .then(res => {
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
            return true;
        })
        .catch(err => {
            dispatch({ type: REGISTER_FAILURE, payload: err.response })
        });
};


export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
        .post("/auth/login", credentials)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.instructor
            });
            return true;
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILURE,
                payload: err.response
            });
        });
};


export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_SUCCESS });
    localStorage.removeItem("token");
}


export const GETALLUSERS_START = "GETALLUSERS_START";
export const GETALLUSERS_SUCCESS = "GETALLUSERS_SUCCESS";
export const GETALLUSERS_FAILURE = "GETALLUSERS_FAILURE";
export const getAllUsers = () => dispatch => {
    dispatch({ type: GETALLUSERS_START });
    axiosWithAuth()
        .get(`/users`)
        .then(res => {
            dispatch({
                type: GETALLUSERS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GETALLUSERS_FAILURE,
                payload: err.response
            })
        })
}
