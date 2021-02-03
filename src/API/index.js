import axios from "axios";

const API = {
    getPhotos: (data) => axios.get('https://api.unsplash.com/photos', {
        params: data
    })
}

export default API;