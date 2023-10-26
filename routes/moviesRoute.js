const express = require('express')
const moviesRoute = express.Router();
const hash = require("../utils/hash")

moviesRoute.get('/', (req, res) => {
    const movies = {
        "1": { "name": "avatar", "poster_id": "abc123" },
        "2": { "name": "cars3", "poster_id": "xyz456" }
    }

    res.send(movies)
})

moviesRoute.get('/:movie_id', (req, res) => {
    const movies = require("../data/movies")
    const id = req.params["movie_id"]

    res.send(movies[id])
})

moviesRoute.get("/:movie_id/available-cinemas", (req, res) => {
    const availableCinemas = require("../data/available-cinemas")
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