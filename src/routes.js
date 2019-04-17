const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show)
//sempre utilizamos o metodo post se formos criar alguma coisa no nosso servidor
routes.post('/products', ProductController.store); 
//put é a rota de atualização
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.destroy)

module.exports = routes;