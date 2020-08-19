const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const connectionString = require('./connectionString')
const cors = require('cors');

const server = express();

mongoose.connect(connectionString, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
server.use(cors());
server.use(express.json())
server.use(routes);

server.listen(3333);