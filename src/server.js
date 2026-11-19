const http = require('http');
const fs = require('fs');
const path = require('path');
const { version } = require('../package.json');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const requestPath = req.url.split('?')[0];

    if (requestPath === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ status: 'ok', version }));
    }

    if (requestPath === '/') {
        const file = path.join(__dirname, '..', 'public', 'index.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return fs.createReadStream(file).pipe(res);
    }

    res.writeHead(404);
    res.end('Not Found');
});

server.listen(PORT, () => {
    console.log(`ShopEasy Lite running on port ${PORT}`);
});
