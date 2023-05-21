const express = require('express')
const app = express()
const logger = require('./logger')

// req => middleware => res 
app.use(logger)

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/v1/products', (req, res) => {
  res.send('products')
})
app.get('/api/v1/items', (req, res) => {
  res.send('Items')
})

app.listen(5000, () => {
  console.log('server is listening on port : 5000...');
})