const express = require('express')
const moviesRoute = express.Router();

const movies = require("../data/movies")
const cinemaHasMovie = require("../data/cinemas").cinemaHasMovie

moviesRoute.get('/', (req, res) => {
    const moviesBasicData = []

    Object.keys(movies).forEach(
        movieId =>
        moviesBasicData.push({ 
            "movie_id": movies[movieId]["id"],
            "name": movies[movieId]["name"],
            "poster_id": movies[movieId]["poster_id"]
        })
    )

    res.send(moviesBasicData)
})

moviesRoute.get('/:movie_id', (req, res) => {
    const id = req.params["movie_id"]
    res.send(movies[id])
})

moviesRoute.get("/:movie_id/cinemas", (req, res) => {
    const id = req.params["movie_id"]
    res.send(cinemaHasMovie(id))
})

module.exports = moviesRoute
