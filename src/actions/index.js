export const increment = (nr) => {
    return {
        type: 'INCREMNET',
        payload: nr
    }
}

export const decrement = () => {
    return {
        type: 'DECREMNET'
    }
}

