import axios from 'axios';

export const  httpClient =  axios.create({
    baseURL:"https://localhost:44311/api/services/app",

    headers: {
        'Content-Type': 'application/json'
    }
})