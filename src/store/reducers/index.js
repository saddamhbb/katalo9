import { combineReducers } from "redux";

const offcanvasState = (state = false, action) => {
    switch (action.type) {
        case "TOGGLE_OFFCANVAS":
            return action.payload;
        default:
            return state;
    }
};

const popularProducts = (state = [], action) => {
    switch (action.type) {
        case "SET_POPULAR_PRODUCTS":
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({ offcanvasState, popularProducts });
