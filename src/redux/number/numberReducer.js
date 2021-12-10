const initialState = {
    number: 10
}

const numberReducer = (state = initialState, action) => {
    switch (action.type) {
        case "X2_NUMBER": {
            return {
                ...state,
                number: Math.pow(state.number, 2)
            }
        }
        case "X3_NUMBER": {
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