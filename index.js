const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

server.get('/', function(request, response) {
  response.json({
    id: 1,
    message: 'Hi!'
  });
});

server.get('/hello/:name', function (req, res) {
  res.send(`Hello ${req.params.name}!`);
});


server.listen(port);
