const express = require('express')
const moviesRoute = express.Router();
const hash = require("../utils/hash")

const movies = require("../data/movies")
const availableCinemas = require("../data/available-cinemas")

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

moviesRoute.get("/:movie_id/available-cinemas", (req, res) => {
    const id = req.params["movie_id"]
    res.send(availableCinemas[id])
})

moviesRoute.post("/:movie_id/buy-ticket", (req, res) => {
    const bodyStr = JSON.stringify(req.body)
    const randomOperationId = hash(bodyStr)

    res.send({
        "ticket_id": randomOperationId
    })
})

module.exports = moviesRoute