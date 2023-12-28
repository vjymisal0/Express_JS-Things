const express = require('express')

const bookController = require('./routes/bookRoutes')
const app = express()
app.use(express.json())

app.use('/', bookController)

app.listen(3001, () => {
    console.log("Server is running on port 3000 => http://localhost:3001")
}
)