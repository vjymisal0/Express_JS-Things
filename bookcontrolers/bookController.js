const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

// const bookRoutes = require('./routes/bookRoutes')
// app.use(bookRoutes)


let books = [
    { id: 1, title: 'book1', author: 'Author1' },
    { id: 2, title: 'book2', author: 'Author2' }
]


//post method
// app.post('/books', (req, res) => {
//     console.log(req.body)
//     const newBook = {
//         id: books.length + 1,
//         title: req.body.title,
//         author: req.body.author
//     }
//     books.push(newBook)
//     res.json(books)
// })

const getBooks = ('/books', (req, res) => {
    res.json(books)
})
const postBooks = ('/books', (req, res) => {
    console.log(req.body)
    const newBook = req.body
    newBook.id = books.length + 1
    books.push(newBook)
    res.json(newBook)
})

const updateBook = ('/books/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const updatedBook = req.body
    const index = books.findIndex(book => book.id === id)
    if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook }
        res.json(books[index])
    }
    else {
        res.json({ message: `Book with id ${id} not found` })
    }
})

const deleteBook = ('/books/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = books.findIndex(book => book.id === id)
    if (index !== -1) {
        books.splice(index, 1)
        res.json({ message: `Book with id ${id} deleted` })
    }
    else {
        res.json({ message: `Book with id ${id} not found` })
    }
}
)


// app.listen(3000, () => {
//     console.log("Server is running on port 3000 => http://localhost:3000")
// })

module.exports = {
    getBooks,
    postBooks,
    updateBook,
    deleteBook
}   //exporting the methods
