import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducers from "./reducers/index";

const store = createStore(
    rootReducers,
    {},
    applyMiddleware(reduxThunk))

export default store 