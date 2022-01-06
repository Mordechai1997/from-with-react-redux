import { combineReducers } from "redux";

const usersListReducer = (intial = null, action) => {
    if (action.type === 'ADD') {
        return intial ? [...intial, action.payload] : [action.payload]
    }
    return intial;
}

export default combineReducers({
    list: usersListReducer
});