import React, { useState } from 'react'

interface Props {
    saveTodo: (title: string) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        saveTodo(inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className='new-todo'
                placeholder='¿Qué necesitas hacer?'
                onChange={(e) => { setInputValue(e.target.value) }}
                autoFocus
            />
        </form>

    )
}
