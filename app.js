const express = require('express')
const app = express()

const people = require('./routes/people')
const authorise = require('./routes/auth')

// static assets
app.use(express.static('./node-express-course/02-express-tutorial/methods-public'))

// parse form data
app.use(express.urlencoded({ extended: false }))

// parse json
app.use(express.json())

// parse /api/people
app.use('/api/people', people)

// parse authorise users
app.use('/login', authorise)

app.listen(5000, () => {
  console.log('server is listening on port : 5000...');
})