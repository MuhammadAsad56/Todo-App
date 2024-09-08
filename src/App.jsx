import { useCallback, useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import FilterButton from './components/FilterButton'

function App() {
  const [todo, setTodo] = useState("")
  const [filterTodos, setFilterTodos] = useState("All")
  const [todos, setTodos] = useState([])

  const handleAddTodo = useCallback(() => {
    setTodos([...todos, { todo, isCompleted: false, id: Date.now() }])
    setTodo("")
  }, [todo])

  const handleOnToggleTodo = (id) => {
    const todosArr = [...todos]
    const todoInd = todosArr.findIndex((data) => data.id === id)
    todosArr[todoInd].isCompleted = !todosArr[todoInd].isCompleted
    setTodos([...todosArr])
  }

  const filteredTodos = todos.filter(data => {
    if (filterTodos == "All") {
      return true
    }
    if (filterTodos == "Completd" && data.isCompleted) {
      return true
    }
    if (filterTodos == "Uncompletd" && !data.isCompleted) {
      return true
    }
  })

  return (
    <>
      <div className='parent-container w-full sm:w-1/2 md:w-1/3 mx-auto flex align-center flex-col gap-5 shadow-2xl border min-h-screen'>
        <h1 className='text-2xl sm:text-3xl border-b font-bold text-center p-5 text-gray-200 '>Todo App</h1>
        <TodoInput onClick={handleAddTodo} todoValue={todo} onChange={(e) => setTodo(e.target.value)} />
        <FilterButton setFilterTodos={setFilterTodos} filterTodos={filterTodos} />
        <div>
          <TodoList onToggle={handleOnToggleTodo} todos={filteredTodos} setTodos={setTodos} />
        </div>
      </div>
    </>
  )
}

export default App


