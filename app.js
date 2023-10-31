const express = require('express')
const app = express()
const port = 4000
const moviesRoute = require("./routes/moviesRoute")
const cinemasRoute = require("./routes/cinemasRoute")
const authenticate = require("./middleware/authenticate")

app.use(express.json());
app.use("/movies", moviesRoute);
app.use("/cinemas", cinemasRoute);

app.get("/posters/:poster_id", authenticate, (req, res) => {
    const posters = require("./data/posters")
    const id = req.params["poster_id"]

    res.send({
        "poster_image": posters[id]
    })
})

app.get("/snacks", authenticate, (req, res) => {
    const snacks = require("./data/snacks")
    res.send(snacks)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
