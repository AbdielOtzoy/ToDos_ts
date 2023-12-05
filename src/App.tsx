import { useState } from 'react'
import { Todos } from './components/Todos'
import { TODO_FILTER } from './conts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodos = [
  {
    id: 1,
    title: 'Todo 1',
    completed: false
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: true
  },
  {
    id: 3,
    title: 'Todo 3',
    completed: false
  }
]
const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<typeof TODO_FILTER[keyof typeof TODO_FILTER]>(TODO_FILTER.ALL)

  const handleRemove = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (id: number, completed: boolean): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: typeof TODO_FILTER[keyof typeof TODO_FILTER]): void => {
    setFilterSelected(filter)
    console.log(filter)
  }

  const filterTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTER.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTER.COMPLETED) return todo.completed
    return todo
  })

  const handleClearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = (title: string): void => {
    const newTodo = {
      id: crypto.getRandomValues(new Uint32Array(1))[0],
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header addTodo={handleAddTodo} />
      <Todos
        onToggleCompleted={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filterTodos}
      />
      <Footer
        activeCount={todos.filter(todo => !todo.completed).length}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        completedCount={todos.filter(todo => todo.completed).length}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  )
}

export default App
