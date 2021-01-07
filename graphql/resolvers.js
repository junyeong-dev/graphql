const michael = {
    name: "Michael",
    age: 20,
    gender: "male"
};

/* 
    person: () => michael
    은 아래와 같음
    person: function() {
        return michael;
    }
*/

const resolvers = {
    Query: {
        person: () => michael
    }
};

export default resolvers;