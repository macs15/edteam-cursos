import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3001/'
})

export default axiosClient;