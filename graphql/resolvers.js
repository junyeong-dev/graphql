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
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, { title, score }) => addMovie(title, score),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
};

export default resolvers;