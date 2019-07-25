import { combineReducers } from 'redux';
import { registerReducer } from "./registerReducer";
import { loginReducer } from "./loginReducer";
import { usersReducer } from './usersReducer';

export default combineReducers({
    registerReducer,
    loginReducer,
    usersReducer
});