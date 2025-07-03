const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello from Docker my new version using EKS!');
});

server.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

