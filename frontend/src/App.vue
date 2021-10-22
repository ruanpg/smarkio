<template>
  <main>
    <div id="overlay" class="hide" v-on:click="toggleDatails('hide')"></div>
    <div id="container">
      <div class="movie" v-for="movie in movies" :key="movie" v-on:click="toggleDatails('show', movie.id)">
        <img v-bind:src="url + movie.imagem" class="poster">
        <p class="content">
          <span class="title">{{ movie.titulo }}</span>
          <span class="year">{{ movie.ano }}</span>
        </p>
      </div>
    </div>

    <div class="modal hide">
      <div class="poster" v-if="item">
        <img v-bind:src="url + item.imagem">
      </div>
      <div class="datails" v-if="item">
        <span class="title">{{ item.titulo }}</span>
        <span class="year">{{ item.ano }}</span>
        <span class="genero">{{item.genero}}</span>
        <span class="overview">
          <p>{{ item.descricao }}</p>
        </span>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  beforeMount(){
    axios.get('http://localhost:8080/filmes')
    .then((res)=>{
      this.movies=res.data
      
    })
  },
  data: (() => {
    return { 
      url: 'https://image.tmdb.org/t/p/w500/',
      item: null,
      movies: [] 
    }
  }),
    methods: {
    toggleDatails: function (selector, id = null) {
      if (selector == 'show') {
        this.movies.forEach((el) => {
          if(el.id === id) {
            this.item = el;
          }
        });

        if(this.item) {
          document.querySelector('#overlay').classList.replace('hide', 'show');
          document.querySelector('.modal').classList.replace('hide', 'show');
        }else {
          alert('Algo deu errado, tente novamente mais tarde.');
        }
      }else {
        document.querySelector('#overlay').classList.replace('show', 'hide');
        document.querySelector('.modal').classList.replace('show', 'hide');
      }
    }
  }
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&display=swap');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
} 

#container {
  width: 90%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-height: 500px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
}

.movie {
  min-height: 70%;
  width: 250px;
  cursor: pointer;
  box-shadow: 5px 10px 10px rgb(0 0 0 / 0.3);
}

.movie:hover {
  transition: 500ms;
  transform: scale(1.05);
}

.movie > .poster {
  width: 100%;
  height: 100%;
}

.movie > .content > .title {
  font-weight: bolder;
}

.movie > .content {
  display: flex;
  flex-direction: column;
}

#overlay {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
}

.hide {
  display: none;
}

.show {
  display: flex;
}

.modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  height: 500px;
  background: white;
  border-radius: 10px;
  z-index: 2;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
}

.modal > .poster {
  height: 100%;
  display: flex;
  align-items: center;
  width: 35%;
}

.modal > .datails {
  max-height: 100%;
  width: 60%;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
}

.modal > .datails > * {
  margin-bottom: 10px;
}

.modal > .poster > img{
  height: 100%;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 0.3);
}

.modal > .datails > .title {
  font-weight: bolder;
  font-size: 17pt;
}
</style>
