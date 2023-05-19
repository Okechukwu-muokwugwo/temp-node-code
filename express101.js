const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(400).send('<h1>Resource not found</h1>')
})

app.listen(4000, () => {
  console.log('server listening on port : 4000 ...');
})

const express = require('express')
const path = require('path')

// const app = express()

// setup static and middleware - app.use is for setting up middleware
app.use(express.static('./node-express-course/02-express-tutorial/public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './node-express-course/02-express-tutorial/navbar-app/index.html'))
// add index.html to static assets
// SSR
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found!')
})

app.listen(4000, () => {
  console.log('server listening on port : 4000...');
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen