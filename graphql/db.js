/*
let movies = [
    {
        id: 1,
        title: "If only",
        score: 4,
    },
    {
        id: 2,
        title: "About time",
        score: 5,
    },
    {
        id: 3,
        title: "Notebook",
        score: 3,
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovie = movies.filter(movie => id === movie.id);
    return filteredMovie[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (title, score) => {
    const newMovie = {
        id: `${ movies.length + 1 }`,
        title,
        score
    }
    movies.push(newMovie);
    return newMovie;
}
*/
import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if(limit > 0) {
        REQUEST_URL += `limit=${ limit }`;
    }
    if(rating > 0) {
        REQUEST_URL += `&minimum_rating=${ rating }`;
    }
    return fetch(REQUEST_URL)
      .then(res => res.json())
      .then(json => json.data.movies);
}
