const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
const phone = require('./data')
const products = require('./data')

// app.use(express.static('example'))

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "./example/index.html"))
    // res.json([{
    //     name: 'John',
    //     age: 30
    // },
    // {
    //     name: 'Vijay',
    //     age: 19
    // }
    // ])
    // res.json(phone)
    res.send("<h1>Home Page</h1><a href='/api/phone'>Phone</a>")

})
/*
app.get('/api/phone/:phoneID', (req, res) => {
    // const newItem = phone.map((item) => {
    //     const { id, name, Image } = item
    //     return { id, name, Image }
    // }) //this is for filtering the data
    const { phoneID } = req.params
    console.log(req.params)
    const singleProduct = phone.find((product) => product.id === Number(phoneID))   //this is for finding the data
    if (!singleProduct) {
        return res.status(404).send("Product does not exist")
    }
    res.json(singleProduct) //this is for sending the data
})
*/
app.get('/api/v1/query', (req, res) => {
    let sortedPhone = [...phone]
    const { search, limit } = req.query
    if (search) {
        sortedPhone = sortedPhone.filter((product) => {
            return product.name.toLowerCase().startsWith(search)
        })
    }
    // if (limit) {
    //     sortedPhone = sortedPhone.slice(0, Number(limit))
    // }
    res.json(sortedPhone)
    // console.log(req.query)
    // res.send("Query Page")
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} click to visit: http://localhost:${PORT}`)
})