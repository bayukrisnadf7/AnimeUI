import axios from "axios";

export const getAnime = (callback) => {
    axios.get(`https://api.jikan.moe/v4/anime?limit=7`).then((response) => {
        // console.log(response);
        callback(response.data.data);
    }).catch((error) => {
        console.log(error);
    })
}
export const getAnimeById = (id, callback) => {
    axios.get(`https://api.jikan.moe/v4/anime/${id}/full`).then((response) => {
        console.log(response);
        callback(response.data.data);
    }).catch((error) => {
        console.log(error);
    })
}