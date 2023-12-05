import { CreateTodo } from './CreateTodo'

interface Props {
    addTodo: (title: string) => void
}

export const Header: React.FC<Props> = ({ addTodo }) => {
    return (
        <header className="header">
            <h1>To-Dos<img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"
                alt="Typescript"
                width="50"
                height="50"
            /></h1>
            <CreateTodo saveTodo={addTodo} />
        </header>
    )
}
