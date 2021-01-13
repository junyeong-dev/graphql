import { getMovies, getById, addMovie, deleteMovie } from "./db";

/* 
    person: () => michael
    은 아래와 같음
    person: function() {
        return michael;
    }
*/
const resolvers = {
    Query: {
        movies: () => getMovies()
    }
};

export default resolvers;