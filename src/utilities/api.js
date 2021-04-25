import axios from "axios";
import { apiURL } from "./url";

export default {
    getProduct: () => {
        return axios.get(`${apiURL()}/products`).then(res => res).catch(e => console.error(e))
    }
}