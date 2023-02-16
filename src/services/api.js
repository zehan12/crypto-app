import axios from "axios"
import { BASE_URL } from "../utils/constant"

export const fetchExchanges = async () => {
    const { data } = await axios.get(`${BASE_URL}/exchanges`)
    return data;
}

export const fetchCoin = async ( currency, page ) => {
    const { data } = await axios.get(`${BASE_URL}/coins/markets?vs_currency=${currency}&page=${page}`)
    return data;
}

export const fetchCoinDetails = async ( id ) => {
    const { data } = await axios.get(`${BASE_URL}/coins/${id}`);
    return data;
}

export const fetchChartData = async ( id, currency, days ) => {
    const { data: chartData } = await axios.get(`${BASE_URL}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`);
    return chartData;
}