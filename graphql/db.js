export const people = [
    {
        id: 1,
        name: "Michael",
        age: 20,
        gender: "male"
    },
    {
        id: 2,
        name: "James",
        age: 30,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}