import axios from 'axios';

const  httpClient =  axios.create({
    baseURL:"https://localhost:44311/api/services/app",
    headers: {
        'Content-Type': 'application/json'
    }
});



httpClient.interceptors.request.use(
    config =>{
        const token = localStorage.getItem('token');

        // Ensure that config.headers is initialized
        if(!config.headers) {
            config.headers = {};
        }

        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    },
    error =>{
        return Promise.reject(error)
    }
)

export {httpClient};