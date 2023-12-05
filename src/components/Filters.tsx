import { type TODO_FILTER, FILTER_BUTTONS } from '../conts'

interface Props {
    filterSelected: typeof TODO_FILTER[keyof typeof TODO_FILTER]
    onFilterChange: (filter: typeof TODO_FILTER[keyof typeof TODO_FILTER]) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    return (
        <ul className="filters">
            {Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => (
                <li key={key}>
                    <a
                        href={href}
                        className={filterSelected === key ? 'selected' : ''}
                        onClick={(event) => {
                            event.preventDefault()
                            onFilterChange(key as typeof TODO_FILTER[keyof typeof TODO_FILTER])
                        }}
                    >
                        {literal}
                    </a>
                </li>
            ))}
        </ul>
    )
}
