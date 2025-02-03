const express = require('express');

const notFound = require('./middlewares/api/notFound');

const server = express();

const isDev = process.env.NODE_ENV === 'development';

server.use(express.json({ limit: '25mb' }));

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is up and running!' });
});

// Always last
server.use('*', notFound);

module.exports = server;
