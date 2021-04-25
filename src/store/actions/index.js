
// Todo: split actions files

import API from "../../utilities/api";

export const getPopularProducts = () => dispatch => {
    return API.getProducts({ _limit: 4 })
        .then(res => {
            dispatch({
                type: "SET_POPULAR_PRODUCTS",
                payload: res.data
            });
        })
        .catch(e => console.error(e));
};