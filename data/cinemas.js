const cinemas = [
    {
        "cinema_id": "1",
        "location": "Caballito",
        "rooms": 7,
        "seats_for_each_room": ["a1","a2","a3","b1","b2","b3"]
    },
    {
        "cinema_id": "2",
        "location": "Abasto",
        "rooms": 8,
        "seats_for_each_room": ["a1","a2","a3","b1","b2","b3","c1","c2","c3"]
    },
    {
        "cinema_id": "3",
        "location": "Puerto Madero",
        "rooms": 5,
        "seats_for_each_room": ["a1","a2","a3","a4","b1","b2","b3","b4"]
    }
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
    }
]

function cinemaHasMovie(movie_id) {
    const selectedCinemas = cinemaHasMovieData
        .filter(cinemaData => cinemaData["has_movies"].includes(movie_id))
        .map(cinemaData => cinemaData["cinema_id"])

    return cinemas.filter(cinema => selectedCinemas.includes(cinema["cinema_id"]))
}

module.exports = { cinemaHasMovie }