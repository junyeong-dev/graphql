import { people, getById } from "./db";

/* 
    person: () => michael
    은 아래와 같음
    person: function() {
        return michael;
    }
*/
const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id)
    }
};

export default resolvers;