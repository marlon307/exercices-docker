const express = require('express');
const restfull = require('node-restful');
const server = express();
const cors = require('cors');


server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

const mongoose = restfull.mongoose;
const PORT = 3000;

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo/mydb');

// Teste
server.get('/', (_req, res) => res.send('BackEnd'))

// ODM
const Client = restfull.model('Client', {
  name: { type: String, required: true }
});

// Rest API
Client.methods(['get', 'post', 'put', 'delete']);
Client.updateOptions({ new: true, runValidators: true });

// Routes
Client.register(server, '/clients')

// Start
server.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
