import axios from "axios";
import { apiURL } from "./url";

export default {
    getProducts: (params = {}) => {
        return axios.get(`${apiURL()}/products`, { params }).then(res => res).catch(e => console.error(e))
    }
}