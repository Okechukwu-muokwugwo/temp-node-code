// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
  
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our Homepage')
  }
  else if (req.url === '/about') {
    res.end('This is our short history')
  }
  else {
    res.end(`
    <h1>404 Not Found</h1>
    <p>We can't seem to find the page you're looking for</p>
    <a href="/"> Back home</a>
  `)
  }
})

server.listen(5000)