import axios from 'axios';
import { API_URL } from '../config';

const axiosService = axios.create({
    baseURL: API_URL,
    timeout: 10000
});

const httpService {
    get(...args) {
        return axiosService.get(...args)
        .then((res) => res)
        .catch((error) => {
            console.log('Error: ' + error);
        })
    }

    post(...args) {
        return axiosService.post(...args)
        .then((res) => res)
        .catch((error) => {
            console.log('Error: ' + error);
        })
    }
}

export default httpService;