import { ref } from 'vue'

export interface Todo {
  id: number
  completed: boolean
  title: string
}

const baseUrl = import.meta.env.VITE_API_BASE_URL

export default function useTodo() {
  const todos = ref<Todo[]>([])
  const pending = ref(false)

  const addTodo = async (todo: string) => {
    const newTodo = {
      title: todo,
      completed: false,
      id: Date.now()
    }

    try {
      pending.value = true
      await fetch(`${baseUrl}/todos/${newTodo.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      })
      todos.value.push(newTodo)
    } catch (error) {
      console.error('Failed to add todo:', error)
    } finally {
      pending.value = false
    }
  }

  const getTodos = async () => {
    try {
      pending.value = true
      const response = await fetch(`${baseUrl}/todos`)
      todos.value = await response.json()
    } catch (error) {
      console.error('Failed to fetch todos:', error)
    } finally {
      pending.value = false
    }
  }

  const toggleTodo = (todo: Todo) => {
    const { id, title, completed } = todo
    try {
      const todoIndex = todos.value.findIndex((todo) => todo.id === id)
      if (todoIndex !== -1) {
        fetch(`${baseUrl}/todos/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title, completed: !completed })
        })
        todos.value[todoIndex].completed = !todos.value[todoIndex].completed
      } else {
        throw new Error('Todo not found')
      }
    } catch (error) {
      console.error('Failed to toggle todo:', error)
    }
  }

  const removeTodo = async (id: number) => {
    try {
      pending.value = true
      await fetch(`${baseUrl}/todos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })
      todos.value = todos.value.filter((todo) => todo.id !== id)
    } catch (error) {
      console.error('Failed to remove todo:', error)
    } finally {
      pending.value = false
    }
  }

  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    getTodos,
    pending
  }
}
