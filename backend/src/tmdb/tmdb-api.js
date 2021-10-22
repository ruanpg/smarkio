const axios = require('axios');
const Filme = require('../models/Filme');
const api_key = process.env.API_KEY;

module.exports = {
    async getlista (){
       axios.get (`https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&language=pt-BR`)
        .then(async(response)=>{
            for(let i = 0; i < 6; i ++){
                let {original_title, poster_path, overview, release_date, genre_ids} = response.data.results [i]
                let genre_text=await this.getGenre(genre_ids)
                Filme.create({titulo:original_title, ano:release_date.substring(0,4), imagem:poster_path, descricao:overview, genero:genre_text})
            }
        }).catch((error)=>{console.log (error)})
    }, 
    async getGenre (genres_ids){
        return new Promise((resolve,reject)=>{
            axios.get (`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=pt-BR`)
        .then((response)=>{
            let genre_text="";
            response.data.genres.forEach((el)=>{
                if(genres_ids.includes(el.id)){
                    genre_text += `${el.name}, `
                }
            })
            genre_text=genre_text.substring(0, genre_text.length -2)
            resolve(genre_text);
        }).catch((error)=>{console.log (error)})
        })
    }
}






