const axios = require('axios');
const Filme = require('../models/Filme');

module.exports = {
    async getlista (){
        axios.get ('https://api.themoviedb.org/3/trending/movie/week?api_key=57178a02b28e9b5f4929f6464789bf44')
        .then((response)=>{
            let {original_title, poster_path, overview, release_date} = response.data.results [i]
            for(let i = 0; i < 6; i ++){
                 Filme.create({titulo:original_title, ano:release_date, imagem:poster_path, descricao:overview, genero:'drama'
                 })
            }
        }).catch((error)=>{console.log})
    } 
}






