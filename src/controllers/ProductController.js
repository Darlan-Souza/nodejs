const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //async esperta que uma instrução seja execultada pra só depois passar pra outra
    async index(req, res) {
        //query são para parametros get
        const { page } = req.query;
        //await faz com que a proxima linha só execulte depois de ele buscar o registro no banco de dados 
        //{page: 1, limit: 10}) a pagina que estou é a 1 e o meu limite por pagina é 10
        const products = await Product.paginate({}, {page: 1, limit: 10});
        return res.json(products);
    },

    async show(req, res) {
        //params são pros ids definidos na rota
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res) {
        //criação
        //o body é para o corpo da requisição 
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async update(req, res) {
        //{new: true} faz com que o mongoose retorne o valor atualizado para dentro da variável product, se eu não passar o new ele vai atualizar as informações antes de atualizar as informações do req.body
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndDelete(req.params.id);

        return res.send();
    }
};