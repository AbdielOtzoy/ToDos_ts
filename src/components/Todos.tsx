import { type ListOfTodos } from '../types'
import { Todo } from './Todo'

interface TodosProps {
    todos: ListOfTodos
    onToggleCompleted: (id: number, completed: boolean) => void
    onRemoveTodo: (id: number) => void
}

export const Todos: React.FC<TodosProps> = ({ todos, onRemoveTodo, onToggleCompleted }) => {
    return (
        <ul className='todo-list'>
            {
                todos.map(todo => (
                    <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onToggleCompleted={onToggleCompleted}
                            onRemoveTodo={onRemoveTodo}
                        />
                    </li>
                ))
            }
        </ul>
    )
}
