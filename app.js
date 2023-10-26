const express = require('express')
const app = express()
const port = 4000
const hash = require("./utils/hash")

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/movies', (req, res) => {
    const movies = {
        "1": { "name": "avatar", "poster_id": "abc123" },
        "2": { "name": "cars3", "poster_id": "xyz456" }
    }

    res.send(movies)
})

app.get('/movies/:movie_id', (req, res) => {
    const movies = require("./movies")
    const id = req.params["movie_id"]

    res.send(movies[id])
})

app.get("/movies/:movie_id/available-cinemas", (req, res) => {
    const availableCinemas = require("./available-cinemas")
    const id = req.params["movie_id"]

    res.send(availableCinemas[id])
})

app.post("/movies/:movie_id/buy-ticket", (req, res) => {
    const bodyStr = JSON.stringify(req.body)
    const randomOperationId = hash(bodyStr)

    res.send({
        "ticket_id": randomOperationId
    })
})

app.get("/posters/:poster_id", (req, res) => {
    const posters = require("./posters")
    const id = req.params["poster_id"]

    res.send({
        "poster_image": posters[id]
    })
})

app.get("/snacks", (req, res) => {
    const snacks = require("./snacks")
    res.send(snacks)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
