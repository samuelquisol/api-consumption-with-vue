<template>
  <div class="container-movie-details d-middle p-100" v-if="movie">
    <router-link to="/" class="back-link">← Back to Home</router-link>
    
    <div class="movie-header">
      <img :src="movie.Poster" alt="Movie Poster" class="movie-poster" />
      
      <div>

        <div class="movie-header">
          <div class="movie-info">
          <h1>{{ movie.Title }}</h1>
          <p><strong>Year:</strong> {{ movie.Year }}</p>
          <p><strong>Genre:</strong> {{ movie.Genre }}</p>
          <p><strong>Director:</strong> {{ movie.Director }}</p>
          <p><strong>Actors:</strong> {{ movie.Actors }}</p>
        </div>
        
        <div class="movie-ratings">
          <h3>Ratings</h3>
          <ul>
            <li v-for="rating in movie.Ratings" :key="rating.Source">
              <strong>{{ rating.Source }}:</strong> {{ rating.Value }}
            </li>
          </ul>
        </div>

        </div>
      <br>

        <div>
          <div class="movie-details">
            <p><strong>Plot:</strong> {{ movie.Plot }}</p>
              <ul>
                <li><strong>Rated:</strong> {{ movie.Rated }}</li>
                <li><strong>Released:</strong> {{ movie.Released }}</li>
                <li><strong>Runtime:</strong> {{ movie.Runtime }}</li>
                <li><strong>Language:</strong> {{ movie.Language }}</li>
                <li><strong>Country:</strong> {{ movie.Country }}</li>
                <li><strong>Awards:</strong> {{ movie.Awards }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <div class="d-middle w-100" v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { useMoviesStore } from "../../store/movies.store"

const route = useRoute()
const movieId = route.params.id as string
const store = useMoviesStore()
const movie = store.oneMovie

onBeforeMount(() => {
  fetchMovieDetails()
})

async function fetchMovieDetails() {
  await store.getMovieById(movieId)
}
</script>

<style scoped lang="scss">

.back-link {
  position: absolute;
  top: 8rem;
  font-size: 1.2em;
  color: #6642b9;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
}

.container-movie-details {
  display: grid;
  gap: 20px;
  padding: 20px;
  color: #fff;
  background-color: #333;
  border-radius: 8px;

  .movie-header {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: flex-start;
    }

    .movie-poster {
      max-width: 100%;
      height: auto;
      border-radius: 8px;

      @media (min-width: 768px) {
        width: 350px;
        height: 475px;
      }
    }

    .movie-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-left: 0;

      h1 {
        font-size: 1.8rem;
      }

      p {
        margin: 0;
      }

      @media (min-width: 768px) {
        width: 650px;
      }
    }
  }

  .movie-details, .movie-ratings {
    background-color: #444;
    padding: 15px;
    border-radius: 8px;

    h3 {
      margin-top: 0;
    }

    ul {
      padding-left: 20px;

      li {
        margin-bottom: 8px;
      }
    }
  }
  
  router-link {
    display: none; /* Hide the router link in the layout, as it's included in the movie-header now */
  }
}

/* Additional Responsive Styles */
@media (max-width: 767px) {
  .movie-header {
    flex-direction: column;
    align-items: center;
    position: relative;

    .movie-info {
      text-align: center;
    }
  }
}
</style>
