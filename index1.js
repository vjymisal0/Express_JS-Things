const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')


app.get('/home', (req, res) => {
    res.send(__dirname, "./example/index.html")
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} click to visit: http://localhost:${PORT}`)
})