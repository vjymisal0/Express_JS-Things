const express = require('express')
const morgan = require('morgan')
const app = express()
const logger = require('morgan')

/*
const logger = (req, res, next) => {
    // const method = req.method
    // const url = req.url
    // const time = new Date().getFullYear()
    // console.log(method, url, time)
    // next()
    console.log(`${new Date()},Request[${req.method}],[${req.url}]`)
    next()
}
*/
// const authorize = (req, res, next) => {
//     console.log('i am the second middleware')
//     next()
// }

app.get('/', (req, res) => {
    res.send('Home')
})

app.use(morgan('dev'))

// app.use([authorize, logger])


app.get('/about', (req, res) => {
    res.send('about')
})


app.listen(3000, () => {
    console.log("Server is running on port 3000, http://localhost:3000")
})


