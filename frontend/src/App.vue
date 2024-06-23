<template>
  <div>
    <header class="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 class="text-xl font-bold">Todo List</h1>
      <nav class="space-x-4">
        <RouterLink to="/" class="px-3 py-2 rounded-md hover:bg-gray-200">Home</RouterLink>
        <RouterLink to="/todos" class="px-3 py-2 rounded-md hover:bg-blue-100">Todos</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
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

// fetchMovies()
</script>
