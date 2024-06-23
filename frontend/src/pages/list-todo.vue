<template>
  <div class="flex flex-col bg-gray-100">
    <form
      @submit.prevent="addTodo(newTodo)"
      class="flex justify-between items-center px-6 py-4 bg-white shadow-md"
    >
      <input
        type="text"
        v-model="newTodo"
        class="px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500"
        placeholder="Add a new todo"
      />
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
        Add
      </button>
    </form>
    <ul class="flex-grow overflow-y-auto px-6 py-4">
      <TodoCard
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle-todo="toggleTodo"
        @remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TodoCard from '@/components/TodoCard.vue'
import useTodo from '@/composables/useTodo'

const { todos, addTodo, toggleTodo, removeTodo, getTodos } = useTodo()

const newTodo = ref('')

getTodos()
</script>

<style scoped>
/* Add any additional styles here */
</style>
