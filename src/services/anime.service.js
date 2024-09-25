import axios from "axios";

export const getAnime = (callback, limit=6) => {
    axios.get(`https://api.jikan.moe/v4/anime?limit=${limit}`).then((response) => {
        // console.log(response);
        callback(response.data.data);
    }).catch((error) => {
        console.log(error);
    })
}