import axios from "axios";

export const apiKey = "XF3k_wCO3fyZO5fsdZxwgttiq1UPs5_12BZ0kDit9bM";

export const fetchImg = async(img, page) => {
    return await axios
        .get(`https://api.unsplash.com/search/photos?query=${img}&page=${page}&per_page=24&client_id=${apiKey}`)
        .then((res) => res.data.results)
}
