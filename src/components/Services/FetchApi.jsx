import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org/3';
const key = 'd8b0e7eb372090a7090ea397e504ef12';

export async function TrendMovies () {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${key}`)
    return response.data.results;
};

export async function KeywordMovies (input) {
    const response = await axios.get(`${BASE_URL}/search/movie?query=${input}&api_key=${key}&language=en-US&page=1&include_adult=false`)
    return response.data.results;
}


export async function CastMovies(id) {
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${key}&language=en-US`);

    return response.data;
}

export async function ReviewsMovies (id) {
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${key}`)
    return response.data.results;
}


export async function DetalisMovies(id) {
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${key}&language=en-US`);

    return response.data;
}
