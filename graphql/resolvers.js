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
        movies: (_, { limit, rating }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id)
      }
};

export default resolvers;