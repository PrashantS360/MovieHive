<script>
import { useRoute } from 'vue-router'
export default {
    name: "MovieDetail",
    data() {
        return {
            movie: {},
            imdbID: ""
        }
    },
    methods: {
        getMovie() {
            const route = useRoute();
            this.imdbId = route.params.id;
            for (let i = 100; i <= 300; i++) {
                fetch(`https://www.omdbapi.com/?i=${route.params.id}&apikey=3adf314a`).then(res => res.json()).then((data) => {
                    if (!data.Error && data.Title && data.Poster != "N/A" && data.Released != "N/A" && data.imdbRating != "N/A" && data.Genre != "N/A" && data.Plot != "N/A") {
                        this.movie = data;
                    }
                })
            }
        }
    },
    mounted() {
        this.getMovie();
    }
}
</script>


<template>
    <div class="container">
        <div class="movie">
            <div class="movie-image">
                <img :src="movie.Poster" alt="movie Image">
            </div>
            <div class="movie-description">
                <h1 class="movie-title">{{ movie.Title }}</h1>
                <div class="subDes">
                    <span class="heading">IMDB Rating :</span>
                    <span class="values"> {{ movie.imdbRating }} / 10 <span style="color: goldenrod;">&#9733;</span> </span>
                </div>
                <div class="subDes">
                    <span class="heading">Summary :</span>
                    <span class="values">{{ movie.Plot }}</span>
                </div>
                <div class="grid">
                    <div class="subDes">
                        <span class="heading">Release Date : </span>
                        <span class="values">{{ movie.Released }}</span>
                    </div>
                    <div class="subDes">
                        <span class="heading">Type : </span>
                        <span class="values">{{ movie.Type }}</span>
                    </div>
                </div>
                <div class="grid">
                    <div class="subDes">
                        <span class="heading">Genre : </span>
                        <span class="values">{{ movie.Genre }}</span>
                    </div>
                    <div class="subDes">
                        <span class="heading">BoxOffice Collection : </span>
                        <span class="values">{{ movie.BoxOffice }}</span>
                    </div>
                </div>
                <div class="subDes">
                    <span class="heading">Director : </span>
                    <span class="values">{{ movie.Director }}</span>
                </div>
                <div class="subDes">
                    <span class="heading">Writers : </span>
                    <span class="values">{{ movie.Writers }}</span>
                </div>
                <div class="grid">
                    <div class="subDes">
                        <span class="heading">Country : </span>
                        <span class="values">{{ movie.Country }}</span>
                    </div>
                    <div class="subDes">
                        <span class="heading">Language : </span>
                        <span class="values">{{ movie.Language }}</span>
                    </div>
                </div>
                <div class="subDes">
                    <span class="heading">Awards : </span>
                    <span class="values">{{ movie.Awards }}</span>
                </div>

            </div>
        </div>
    </div>
</template>


<style scoped>
body {
    margin: 0;
    padding: 0;
}

.subDes {
    padding: 5px;
    margin: 7px;
}

.grid{
    display: flex;
    justify-content: space-between;
}

.heading {
    font-size: large;
    font-weight: bold;
    margin-right: 4px;
}

.value {
    font-weight: lighter;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.movie {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.movie-image {
    flex: 1;
    max-width: 35%;
    padding: 20px;
    box-sizing: border-box;
}

.movie-image img {
    max-width: 100%;
    height: auto;
    float: right;
    margin-right: 20px;
    display: block;
}

.movie-description {
    /* color: white; */
    flex: 1;
    max-width: 50%;
    padding: 20px;
    box-sizing: border-box;
}

.movie-title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
}

.movie-price {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.movie-description p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 20px;
}

.movie-action {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.movie-action button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
}

.movie-action button:hover {
    background-color: #0056b3;
}

.movie-action input[type="number"] {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 50px;
    margin-right: 10px;
}

.movie-action label {
    font-size: 18px;
    margin-right: 10px;
}

@media screen and (max-width: 768px) {
    .movie {
        flex-direction: column;
    }

    .movie-image,
    .movie-description {
        max-width: 100%;
    }
}
</style>