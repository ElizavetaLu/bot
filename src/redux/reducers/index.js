import { combineReducers } from "redux";
import logInReducer from "./logInReducer";
import uploadedFilesReducer from "./uploadedFilesReducer";
import createPostReducer from "./createPostReducer";
import modalReducer from "./modalReducer";
import dropdownReducer from "./dropdownReducer";
import botsReducer from "./botsReducer";


const rootReducers = combineReducers({
    logIn: logInReducer,
    uploadedFiles: uploadedFilesReducer,
    createPost: createPostReducer,
    modal: modalReducer,
    dropdown: dropdownReducer,
    bots: botsReducer,
});

export default rootReducers