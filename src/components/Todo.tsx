import { type Todo as TodoType } from '../types'

interface TodoProps extends TodoType {
    onToggleCompleted: (id: number, completed: boolean) => void
    onRemoveTodo: (id: number) => void
}

export const Todo: React.FC<TodoProps> = ({ id, title, completed, onRemoveTodo, onToggleCompleted }) => {
    return (
        <div className='view'>
            <input
                className='toggle'
                checked={completed}
                type='checkbox'
                onChange={(event) => {
                    onToggleCompleted(id, event.target.checked)
                }}
            />
            <label>{title}</label>
            <button className='destroy' onClick={() => {
                onRemoveTodo(id)
            }} />
        </div>
    )
}
