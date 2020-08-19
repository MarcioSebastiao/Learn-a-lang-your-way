const express = require('express');
const wordsController = require('./controllers/WordsController');
const searchController = require('./controllers/SearchController');

const routes = express.Router();


routes.get('/', wordsController.getAll);
routes.post('/', wordsController.store);
routes.put('/:id', wordsController.update);
routes.delete('/:id', wordsController.delete);

routes.get('/search', searchController.get);

module.exports = routes;