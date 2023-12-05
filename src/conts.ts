export const TODO_FILTER = {
    ALL: 'all',
    COMPLETED: 'completed',
    ACTIVE: 'active'
} as const

export const FILTER_BUTTONS = {
    [TODO_FILTER.ALL]: {
        literal: 'Todos',
        href: `/?filter=${TODO_FILTER.ALL}`
    },
    [TODO_FILTER.COMPLETED]: {
        literal: 'Completados',
        href: `/?filter=${TODO_FILTER.COMPLETED}`
    },
    [TODO_FILTER.ACTIVE]: {
        literal: 'Activos',
        href: `/?filter=${TODO_FILTER.ACTIVE}`
    }
} as const
