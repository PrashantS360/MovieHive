<script setup>
defineProps({
  movie: {
    type: Object,
    required: true
  }
})
</script>

<script>
export default{
  data() {
    return {
      url: "movies/"
    }
  },
}
</script>

<template>
  <div class="item">
    <div class="card">
      <div class="card__header">
        <img :src="movie.Poster" alt="card__image" class="card__image" width="600">
      </div>
      <div>
        <div class="card__body">
          <span class="tag tag-red">{{ movie.Released }}</span>
          <h4>{{ movie.Title }}</h4>
          <p>{{ movie.Plot.substring(0,100) }}...</p>
          <router-link :to="url+movie.imdbID">Know More...</router-link>
        </div>
        <div class="card__footer">
          <div class="user">
            <div class="user__info">
              <h3>{{ movie.imdbRating }} / 10 <span style="color: goldenrod;">&#9733;</span></h3>
              <small>{{ movie.Genre }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.item {
  color: black;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
}





body {
  /* font-family: "Quicksand", sans-serif; */
  display: grid;
  place-items: center;
  height: 100vh;
  background: #7f7fd5;
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
}

img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

.card {
  display: flex;
  /* flex-direction: column; */
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  background: #ECE9E6;
  background: linear-gradient(to right, #FFFFFF, #ECE9E6);

}

.card__header {
  display: flex;
  align-items: center;
}


.card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}


.tag {
  align-self: flex-start;
  padding: .25em .75em;
  border-radius: 1em;
  font-size: .75rem;
}

.tag+.tag {
  margin-left: .5em;
}

.tag-blue {
  background: #56CCF2;
  background: linear-gradient(to bottom, #2F80ED, #56CCF2);
  color: #fafafa;
}

.tag-brown {
  background: #D1913C;
  background: linear-gradient(to bottom, #FFD194, #D1913C);
  color: #fafafa;
}

.tag-red {
  background: #cb2d3e;
  background: linear-gradient(to bottom, #ef473a, #cb2d3e);
  color: #fafafa;
}

.card__body h4 {
  font-size: 1.5rem;
  text-transform: capitalize;
}

.card__footer {
  display: flex;
  padding: 1rem;
  margin-top: auto;
}

.user {
  display: flex;
  gap: .5rem;
}

.user__image {
  border-radius: 50%;
}

.user__info>small {
  color: #666;
}
</style>
