const express = require('express');
const restfull = require('node-restful');
const server = express();

const mongoose = restfull.mongoose;
const PORT = 3000;

// Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb');

// Teste
server.get('/', (_req, res) => res.send('BackEnd'))

// Start

server.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
