<template>
  <li class="flex justify-between items-center py-2 border-b border-gray-200">
    <p :class="{ 'line-through': todo.completed }">{{ todo.title }}</p>
    <div class="flex space-x-2">
      <button
        @click="$emit('toggle-todo', todo)"
        class="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
      >
        <svg
          v-if="!todo.completed"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <svg
          v-if="todo.completed"
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.74-13.74a.75.75 0 00-1.06 0L8 12l-1.24-1.24a.75.75 0 00-1.06 1.06l4 4a.75.75 0 001.06 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        @click="$emit('remove-todo', todo.id)"
        class="px-2 py-1 rounded-md bg-red-500 text-white hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{ todo: { id: number; completed: boolean; title: string } }>()
defineEmits(['toggle-todo', 'remove-todo'])
</script>

<style scoped></style>
