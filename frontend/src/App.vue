<template>
  <div>
    <MovieCard v-for="movie in movies" :key="movie" :movie="movie" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import MovieCard from '@/components/MovieCard.vue'

const baseUrl = import.meta.env.VITE_API_BASE_URL as string

const movies = ref([])

async function fetchMovies() {
  const response = await fetch(`${baseUrl}/movies`)
  const data = await response.json()
  movies.value = data
}

fetchMovies()
</script>

<style scoped></style>
