import axios from 'axios'

const BASE_URL = "http://localhost:5000/commerce/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGI4YzAzODVjMzUyOWJmMTM0YzhkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTAzNDczMiwiZXhwIjoxNjQ1MjkzOTMyfQ.k-2B0fNuW2kCUoClQJe3Mi-w_oaQqBaPmOKfBj_iWus"

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})