import axios from "axios"
import { BASE_URL } from "../utils/constant"

export const fetchExchanges = async () => {
    const { data } = await axios.get(`${BASE_URL}/exchanges`)
    return data
}

export const fetchCoin = async ( currency, page ) => {
    const { data } = await axios.get(`${BASE_URL}/coins/markets?vs_currency=${currency}&page=${page}`)
    return data
}