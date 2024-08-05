import { useState, useEffect } from 'react'
import './App.css'
import { TodoForm, TodoItem } from './components'
import { TodoProvider } from './contexts'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((todos) => [{id: Date.now(), ...todo}, ...todos])
  }

  const updateTodo = (id, todo) => {
    setTodos((todos) => (todos.map(t => (t.id === id ? todo : t))))
  }

  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((todos) => todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}} >
      <div className="bg-[#9d4a88] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                          <div key={todo.id} className="w-full">
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
      </div>
    </TodoProvider>
  )
}

export default App
