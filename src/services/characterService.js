import axios from 'axios';

export const fetchCharacters = (URL) => {
    axios.get(URL)
    .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    })
    .catch((error) => {
        console.log(error);
    })
}