export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

export const add_user = data => {
    return {
        type: 'ADD_USER',
        payload: data
    }
}

export const remove_user = index => {
    return {
        type: 'REMOVE_USER',
        payload: index
    }
}