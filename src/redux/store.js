// We may have several reducers and 
// actions but there is always only 1 store.
// So we put the actios and reducer files in a
//  folder and put the store file next to it

//Middlewares are used inside the store

/////////////////////////////////////////////



import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

//reducer must be given as input to the createStore
// const store = createStore(rootReducer)

//middleware logger
// const store = createStore(rootReducer, applyMiddleware(logger));

//redux devtools
const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(logger)));
export default store;