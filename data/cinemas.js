const cinemas = [
    {
        "cinema_id": "1",
        "location": "Caballito",
        "available_seats": 32,
    },
    {
        "cinema_id": "2",
        "location": "Abasto",
        "available_seats": 40,
    },
    {
        "cinema_id": "3",
        "location": "Puerto Madero",
        "available_seats": 25,
    },
    {
        "cinema_id": "4",
        "location": "Villa del parque",
        "available_seats": 28,
    },
    {
        "cinema_id": "5",
        "location": "Palermo",
        "available_seats": 36,
    },
    {
        "cinema_id": "6",
        "location": "Liniers",
        "available_seats": 24,
    },
    {
        "cinema_id": "7",
        "location": "Olivos",
        "available_seats": 30,
    },
    
]

const cinemaHasMovieData = [
    {
        "cinema_id": "1",
        "has_movies": ["1", "2", "3", "4", "5", "6", "7", "8", "21", "22", "23", "24", "25"]
    },
    {
        "cinema_id": "2",
        "has_movies": ["1", "2", "9", "10", "11", "12", "13", "14", "15", "16", "23", "24", "26"]
    },
    {
        "cinema_id": "3",
        "has_movies": ["7", "8", "9", "14", "15", "17", "18", "19", "20", "25", "26"]
    },
    {
        "cinema_id": "4",
        "has_movies": ["1", "4", "5", "6", "7", "16", "17", "18", "19", "20", "21", "25"]
    },
    {
        "cinema_id": "5",
        "has_movies": ["2", "3", "9", "10", "11", "12", "13", "21", "22", "23", "24"]
    },
    {
        "cinema_id": "6",
        "has_movies": ["3", "5", "7", "8", "9", "11", "12", "19", "20", "22", "25", "26"]
    },
    {
        "cinema_id": "7",
        "has_movies": ["4", "10", "14", "15", "17", "18", "19", "20", "22", "26"]
    },
]

function cinemaHasMovie(movie_id) {
    const selectedCinemas = cinemaHasMovieData
        .filter(cinemaData => cinemaData["has_movies"].includes(movie_id))
        .map(cinemaData => cinemaData["cinema_id"])

    return cinemas
        .filter(cinema => selectedCinemas.includes(cinema["cinema_id"]))
        .map(cinema => cinema["cinema_id"])
}

module.exports = { cinemas, cinemaHasMovieData, cinemaHasMovie }