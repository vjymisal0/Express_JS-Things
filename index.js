const express = require('express');
const app = express();
const PORT = 3000;
const PATH = require('path');

app.get('/', (req, res) => {
    res.send("<h1>Hello world</h1>")
})
app.get('/contact', (req, res) => {
    res.send('<h1>Contact page</h1>');
})
app.get('/files', (req, res) => {
    res.sendFile(PATH.join(__dirname, 'index.html'))

})
app.get('/jsonres', (req, res) => {
    // res.json({
    //     name: 'John',
    //     age: 30
    // })
    res.send([{
        firstName: 'vijay',
        lastName: 'kumar'
    }
        , {
        firstName: 'samantha',
        lastName: 'shroff'
    }])
})

app.all('*', (req, res) => {
    res.status(404).send([{ error: 'Page not found' }])
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} click to visit: http://localhost:${PORT}`)
})