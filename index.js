const express = require('express')

const app = express()


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/show-contact', (req, res) => {
    res.render('showContact')
})
app.get('/add-contact', (req, res) => {
    res.render('addContact')
})
app.post('/show-contact', (req, res) => {
    res.send('Hello World')
})
app.get('/update-contact', (req, res) => {
    res.render('updateContact')
})
app.post('/update-contact', (req, res) => {
    res.send('Hello World')
})
app.get('/delete-contact', (req, res) => {
    res.send('Hello World')
})