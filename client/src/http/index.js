import axios from 'axios';

const $host = axios.create({
        baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
        baseURL: process.env.REACT_APP_API_URL
})

const authIntersceptor = config => {
        config.headers.Authorization = `Bearer ${localStorage.getItem(token)}`;
        return config;
} 

$authHost.interceptors.request.use(authIntersceptor)

export {
        $authHost,
        $host
}