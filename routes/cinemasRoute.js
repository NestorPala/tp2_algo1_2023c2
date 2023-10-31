const express = require('express')
const cinemasRoute = express.Router();

const authenticate = require("../middleware/authenticate")

const cinemas = require("../data/cinemas").cinemas
const cinemas_ids = require("../data/cinemas").cinemas_ids

const notFoundError = require("../errors").notFoundError


cinemasRoute.get("/", authenticate, (req, res) => {
    res.send(cinemas)
})


cinemasRoute.get("/:cinema_id/movies", authenticate, (req, res) => {
    const cinema_id = req.params["cinema_id"]

    if (!cinemas_ids.includes(cinema_id)) {
        return notFoundError(res, "Cinema")
    }

    const cm_data = require("../data/cinemas").cinemaHasMovieData
    const cinemaMovies = cm_data.filter(cinemaMovies => cinemaMovies["cinema_id"] == cinema_id)

    res.send(cinemaMovies)
})


module.exports = cinemasRoute
