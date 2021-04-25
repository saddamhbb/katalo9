import axios from "axios";
import { apiURL } from "./url";

export default {
    getProduct: (params = {}) => {
        console.log(params)
        return axios.get(`${apiURL()}/products`, { params }).then(res => res).catch(e => console.error(e))
    }
}