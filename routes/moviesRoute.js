const express = require('express')
const moviesRoute = express.Router();

const movies = require("../data/movies")
const cinemaHasMovie = require("../data/cinemas").cinemaHasMovie

const authenticate = require("../middleware/authenticate")
const notFoundError = require("../errors").notFoundError


moviesRoute.get('/', authenticate, (req, res) => {
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


moviesRoute.get('/:movie_id', authenticate, (req, res) => {
    const id = req.params["movie_id"]
    if (!(id in movies)) {
        return notFoundError(res, "Movie")
    }
    res.send(movies[id])
})


moviesRoute.get("/:movie_id/cinemas", authenticate, (req, res) => {
    const id = req.params["movie_id"]
    if (!(id in movies)) {
        return notFoundError(res, "Movie")
    }
    res.send(cinemaHasMovie(id))
})


module.exports = moviesRoute
