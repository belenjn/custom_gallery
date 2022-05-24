import axios from "axios";

import {apiKey} from "../env";

export const fetchImg = async(img, page) => {
    return await axios
        .get(`https://api.unsplash.com/search/photos?query=${img}&page=${page}&per_page=24&client_id=${apiKey}`)
        .then((res) => res.data.results)
}
