const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMNET':
            return state + action.payload
        case 'DECREMNET':
            return state - 1
        default:
            return state
    }
}

export default counterReducer;