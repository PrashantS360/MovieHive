<script setup>
import Card from './Card.vue'

defineProps({
  movies: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="movies">
    <div v-for="movie in movies" :key="movie.imdbID">
      <Card :movie="movie">
      </Card>
    </div>
  </div>
</template>

<style scoped>
.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
