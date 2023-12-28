const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

let books = [
    { id: 1, title: 'book1', author: 'Author1' },
    { id: 2, title: 'book2', author: 'Author2' }
]

//get method
app.get('/books', (req, res) => {
    res.json(books)
})
//post method
app.post('/books', (req, res) => {
    const book = req.body
    books.push(book)
    res.json(book)
})
app.listen(3000, () => {
    console.log("Server is running on port 3000 => http://localhost:3000")
})