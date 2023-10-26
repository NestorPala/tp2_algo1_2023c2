const express = require('express')
const app = express()
const port = 4000

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
