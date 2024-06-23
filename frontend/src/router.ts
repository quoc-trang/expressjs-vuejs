import { createWebHistory, createRouter } from 'vue-router'

import TodoListView from '@/pages/list-todo.vue'
import HomeView from '@/pages/index.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/todos',
    component: TodoListView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
