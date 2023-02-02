import axios from "axios";
const baseURL = 'http://localhost:3434/'

axios.interceptors.request.use((config) => {
    config.headers = { token: localStorage.getItem('token') }
    return config
})

export const signIn = (payload) => {
    return axios.post(`${baseURL}signin`, payload)
}

export const getAllBotsList = () => {
    return axios.get(`${baseURL}bots-list`)
}

export const checkUser = () => {
    return axios.get(`${baseURL}check`)
}

export const deleteBotFetch = (payload) => {
    return axios.delete(`${baseURL}delete-bot`, { data: { twitterLogin: payload } })
}

export const updateBotData = (payload) => {
    return axios.put(`${baseURL}update-bot`, payload)
}

export const createBot = (payload) => {
    return axios.post(`${baseURL}create-new-bot`, payload)
}