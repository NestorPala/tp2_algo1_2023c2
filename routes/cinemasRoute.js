const express = require('express')
const cinemasRoute = express.Router();

const authenticate = require("../middleware/authenticate")

cinemasRoute.get("/", authenticate, (req, res) => {
    const cinemas = require("../data/cinemas").cinemas
    res.send(cinemas)
})

cinemasRoute.get("/:cinema_id/movies", authenticate, (req, res) => {
    const cm_data = require("../data/cinemas").cinemaHasMovieData
    const cinemaMovies = cm_data.filter(cinemaMovies => cinemaMovies["cinema_id"] == req.params["cinema_id"])
    res.send(cinemaMovies)
})

module.exports = cinemasRoute
