<script setup>
import Movies from './Movies.vue'
</script>

<template>
  <header>
    <div class="form">
      <img src="/search.png" alt="searchIcon" class="searchIcon">
      <input class="form-field" placeholder="Search movies by their titles" type="text" v-model="title"
        @change="searchMovies">
    </div>
  </header>

  <main>
    <Movies class="movie" :movies="movies" />
  </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      movies: [],
      title: ""
    }
  },
  methods: {
    getMovies: function() {
      for (let i = 100; i <= 300; i++) {
        fetch(`https://www.omdbapi.com/?i=tt3896${i}&apikey=3adf314a`).then(res => res.json()).then((data) => {
          if (!data.Error && data.Title && data.Poster != "N/A" && data.Released != "N/A" && data.imdbRating != "N/A" && data.Genre != "N/A" && data.Plot != "N/A") {
            this.movies.push(data);
          }
        })
      }
    },
    searchMovies: function () {
      if (this.title.length) {
        this.movies = [];
        fetch(`https://www.omdbapi.com/?&t=${this.title}&apikey=3adf314a`).then(res => res.json()).then((data) => {
          if (!data.Error && data.Title) {
            this.movies.push(data);
          }
        })
      } else {
        this.getMovies();
      }
    }
  },

  mounted() {
    this.getMovies();
  }
}
</script>

<style scoped>
.searchIcon {
  position: relative;
  width: 35px;
  height: 25px;
  top: 6px;
  left: 60vw;
  cursor: pointer;
}

.form {
  margin-top: 1vh;
}

.form-field {
  margin: 10px 0;
  min-width: 45vw;
  outline: none;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: large;
}

header {
  line-height: 1.5;
  display: flex;
  justify-content: center;
}

main {
  margin-bottom: 50px;
}

.movie {
  margin: 3px 10px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 450px) {
  .searchIcon {
    left: 48.5vw;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
