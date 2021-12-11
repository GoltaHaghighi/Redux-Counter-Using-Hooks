const initialState = {
    number: 10
}

const numberReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POW2": {
            return {
                ...state,
                number: Math.pow(state.number, 2)
            }
        }
        case "SQRT3": {
            return {
                ...state,
                number: Math.sqrt(state.number)
            }
        }
        default: {
            return state;
        }
    }
}
export default numberReducer;