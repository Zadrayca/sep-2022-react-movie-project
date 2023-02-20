import axios from "axios";

import {baseUrl, imagesUrl} from "../configs";

const accessTokenKey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDM4OTM1N2M0M2RmYjVlZDU2ZjUwMjkzZTVjZjM4ZSIsInN1YiI6IjYzZWY3NTRkZWE4NGM3MDBiMjlkMTdhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dDFXwendObOR9DcZqyE-rrazGQV7ajGcd6qtNT6dNYE';

const apiServiceMovies = axios.create({baseURL: baseUrl});

// const apiServiceImage = axios.create({baseURL: imagesUrl});

apiServiceMovies.interceptors.request.use((config) => {
    config.headers.Authorization = accessTokenKey;
    return config
});

// apiServiceImage.interceptors.request.use((config) => {
//     config.headers.Authorization = accessTokenKey;
//     return config
// });

export {
    apiServiceMovies,
    // apiServiceImage
};

