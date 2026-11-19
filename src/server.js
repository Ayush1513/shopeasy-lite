const http = require('http');
const { addItem, total } = require('./cart');

const server = http.createServer((req, res) => {
  const path = req.url.split('?')[0];

  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ShopEasy Lite Server Running!');
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
