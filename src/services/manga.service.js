import axios from "axios";

export const getManga = (callback, limit=7) => {
    axios.get(`https://api.jikan.moe/v4/manga?limit=${limit}`).then((response) => {
        // console.log(response);
        callback(response.data.data);
    }).catch((error) => {
        console.log(error);
    })
}
export const getMangaRecommendation = (callback) => {
    axios.get(`https://api.jikan.moe/v4/recommendations/manga`).then((response) => {
        // console.log(response);
        callback(response.data.data);
    }).catch((error) => {
        console.log(error);
    })
}