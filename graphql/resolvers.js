import { movies, getById } from "./db";

/* 
    person: () => michael
    은 아래와 같음
    person: function() {
        return michael;
    }
*/
const resolvers = {
    Query: {
        movies: () => movies,
        movie: (_, { id }) => getById(id)
    }
};

export default resolvers;