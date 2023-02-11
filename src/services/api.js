import axios from "axios"
import { BASE_URL } from "../utils/constant"

export const fetchExchanges = async () => {
    const { data } = await axios.get(`${BASE_URL}/exchan`)
    return data
}