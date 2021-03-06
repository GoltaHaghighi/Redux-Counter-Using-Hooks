//for multiple reducers, combine reducers in a separate file 

import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import numberReducer from "./number/numberReducer";

const rootReducer = combineReducers({
    numberState: numberReducer,
    counterState: counterReducer
})

export default rootReducer;