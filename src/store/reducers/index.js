import { combineReducers } from "redux";

const offcanvasState = (state = false, action) => {
    switch (action.type) {
        case "TOGGLE_OFFCANVAS":
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({ offcanvasState });
