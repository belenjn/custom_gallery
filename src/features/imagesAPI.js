import { apiKey } from "../env";
import axios from "axios";

const Access_Key = apiKey;

// export const fetchImg = async (img, page) => {
//     const data = await fetch(
//       `https://api.unsplash.com/search/photos?query=${img}&page=${page}&per_page=24&client_id=${Access_Key}`
//     );
//     const dataJson = await data.json();
//     const result = dataJson.results;
//     // console.log(result)
//   }

export const fetchImg = async(img, page) => {
    return await axios
        .get(`https://api.unsplash.com/search/photos?query=${img}&page=${page}&per_page=24&client_id=${Access_Key}`)
        .then((res) => res.data.results)
}
