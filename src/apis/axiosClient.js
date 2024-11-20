import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.onrender.com/api/v1',
    timeout: 10000,
    headers:{
        'Content-type': 'application/json',
    }
})