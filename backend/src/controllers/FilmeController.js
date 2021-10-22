const axios = require ('axios');
const Filme = require('../models/Filme');

module.exports = {
    async index(req, res){
        const filme = await Filme.findAll({limit:6});
        return res.json(filme);        
    },

    async store(req, res) {
        const { titulo, ano, imagem, descricao, genero } = req.body;

        const filme = await Filme.create({ titulo, ano, imagem, descricao, genero });
        return res.json(Filme);
    }
    
};