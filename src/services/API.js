import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:5001/api/'
});

//get
const get = async (url) => {
    return instance.get(url)
        .then((response) => response.data)
        .catch((error) => {throw error;})
}

export default {get};