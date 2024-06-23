<template>
  <div class="movie-card bg-gray-100 rounded-lg shadow-md overflow-hidden">
    <div class="movie-poster relative w-full h-48">
      <img :src="movie.poster" alt="Movie Poster" class="object-cover w-full h-full rounded-t-lg" />
      <div
        class="absolute inset-0 bg-black opacity-20 hover:opacity-75 flex justify-center items-center"
      >
        <p class="text-white text-xl font-bold">{{ movie.runtime }} min</p>
      </div>
    </div>
    <div class="movie-info px-4 py-3">
      <h2 class="text-xl font-bold text-gray-800">{{ movie.title }}</h2>
      <p class="text-sm text-gray-600 mb-2">{{ movie.genres.join(', ') }}</p>
      <p class="text-gray-600 truncate overflow-ellipsis">{{ movie.plot }}</p>
      <div class="flex items-center mt-2">
        <span class="text-sm text-gray-600 mr-2">Released:</span>
        <span class="text-sm font-bold">{{ releasedYear }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
interface Movie {
  _id: { $oid: string }
  plot: string
  genres: string[]
  runtime?: { $numberInt: number }
  cast: string[]
  poster: string
  title: string
  fullplot?: string
  languages: string[]
  released?: { $date: { $numberLong: number } }
  directors: string[]
  rated?: string
  awards?: { wins: { $numberInt: number }; nominations: { $numberInt: number }; text: string }
  lastupdated?: string
  year?: { $numberInt: number }
  imdb?: {
    rating: { $numberDouble: number }
    votes: { $numberInt: number }
    id: { $numberInt: number }
  }
  countries?: string[]
  type?: string
  tomatoes?: {
    viewer: {
      rating: { $numberDouble: number }
      numReviews: { $numberInt: number }
      meter: { $numberInt: number }
    }
    fresh: { $numberInt: number }
    critic: {
      rating: { $numberDouble: number }
      numReviews: { $numberInt: number }
      meter: { $numberInt: number }
    }
    rotten: { $numberInt: number }
    lastUpdated: { $date: { $numberLong: number } }
  }
  num_mflix_comments?: { $numberInt: number }
}

const props = defineProps<{ movie: Movie }>()
const releasedYear = computed(() => {
  const releasedDate = new Date(props.movie.released?.$date?.$numberLong ?? '')
  return releasedDate.getFullYear()
})
</script>

<style scoped>
.truncate {
  max-width: 300px;
}
</style>
