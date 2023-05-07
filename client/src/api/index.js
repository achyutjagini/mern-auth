import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const signup = payload => api.post(`/signup`, payload)
export const signin = payload => api.post(`/signin`, payload)

const apis = {
    signin,
    signup
}

export default apis