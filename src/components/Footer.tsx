import { type TODO_FILTER } from '../conts'
import { Filters } from './Filters'

interface Props {
  completedCount: number
  onClearCompleted: () => void
  activeCount: number
  filterSelected: typeof TODO_FILTER[keyof typeof TODO_FILTER]
  handleFilterChange: (filter: typeof TODO_FILTER[keyof typeof TODO_FILTER]) => void
}

export const Footer: React.FC<Props> = ({ onClearCompleted, activeCount = 0, completedCount = 0, filterSelected, handleFilterChange }) => {
  return (
    <footer className="footer">
      <span className="todo-count"><strong>{activeCount}</strong> tareas pendientes</span>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {
        completedCount > 0 && (
          <button
            className="clear-completed"
            onClick={onClearCompleted}>
            Borrar completadas
          </button>
        )
      }
    </footer>
  )
}
