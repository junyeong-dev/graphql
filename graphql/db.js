export const movies = [
    {
        id: 1,
        title: "If only",
        score: 4,
    },
    {
        id: 2,
        title: "About time",
        score: 4.5,
    },
    {
        id: 3,
        title: "Notebook",
        score: 3.5,
    },
];

export const getById = id => {
    const filteredMovie = movies.filter(movie => id === movie.id);
    return filteredMovie[0];
}