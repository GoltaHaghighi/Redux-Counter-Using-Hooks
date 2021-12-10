// We may have several reducers and 
// actions but there is always only 1 store.
// So we put the actios and reducer files in a
//  folder and put the store file next to it

/////////////////////////////////////////////
import { createStore } from "redux";
import rootReducer from "./rootReducer";
//reducer must be given as input to the createStore
const store = createStore(rootReducer);
export default store;