const http = require('http');
const port = process.env.PORT || 8080;
http.createServer((req, res) => {
  res.end("Hello from Minikube!\n");
}).listen(port, ()=> console.log("Server running on port", port));

