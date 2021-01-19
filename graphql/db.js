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
import axios from "axios";
const BASE_URL = "https://yts-proxy.now.sh/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
    const {
      data: {
        data: { movies }
      }
    } = await axios(LIST_MOVIES_URL, {
      params: {
        limit,
        minimum_rating: rating
      }
    });
    return movies;
  };
  
  export const getMovie = async id => {
    const {
      data: {
        data: { movie }
      }
    } = await axios(MOVIE_DETAILS_URL, {
      params: {
        movie_id: id
      }
    });
    return movie;
  };
  
  export const getSuggestions = async id => {
    const {
      data: {
        data: { movies }
      }
    } = await axios(MOVIE_SUGGESTIONS_URL, {
      params: {
        movie_id: id
      }
    });
    return movies;
  };