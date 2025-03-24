const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Contact = require('./models/contactsModel')

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/contacts-crud')
    .then(() => {
        console.log('Connected to MongoDB')
    })


// Middleware

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.get('/', async (req, res) => {
    const contacts = await Contact.find()
    res.render('home', { contacts })
})
app.get('/show-contact/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    res.render('showContact', { contact })
})
app.get('/add-contact', (req, res) => {
    res.render('addContact')
})
app.post('/add-contact', async (req, res) => {
    await Contact.create(req.body)
    res.redirect('/')
})
app.post('/show-contact', (req, res) => {
    res.send('Hello World')
})
app.get('/update-contact/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    res.render('updateContact', { contact })
})
app.post('/update-contact/:id', async (req, res) => {
    await Contact.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/')

})
app.get('/delete-contact/:id', async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id, req.body)
    res.redirect('/')
})