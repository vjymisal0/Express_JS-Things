const express = require('express')
const router = express.Router()
const bookController = require('../bookcontrolers/bookController')

router.get('/books', bookController.getBooks)
router.post('/books', bookController.postBooks)
router.put('/books/:id', bookController.updateBook)
router.delete('/books/:id', bookController.deleteBook)


module.exports = router