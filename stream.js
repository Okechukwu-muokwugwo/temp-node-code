const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark: 9000})

stream.on('data', (result) => {
  console.log(result);
})

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // const text = fs.readFileSync('./content/big.txt', 'utf8')
  // res.end(text)

  const dataStream = fs.createReadStream('./content/big.txt', 'utf8');
  dataStream.on('open', () => {
    dataStream.pipe(res)
  })
  dataStream.on('error', (err) => {
    res.end(err)
  })
})

server.listen(5000)