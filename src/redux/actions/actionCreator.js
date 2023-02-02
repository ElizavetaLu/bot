import {
    SET_BOTS_LIST,
    LOG_IN_ERROR,

    OPEN_CLOSE_MODAL,
    SET_UPLOADED_FILES,

    SHOW_CREATE_NEW_POST_FORM,
    SHOW_LANG_DROPDOWN,
    LANG_TERM_CHANGE_FORM,
    SELECT_LANGUAGE_FORM,
    CLEAN_UP_FORM,
    SHOW_SUCCESS_POPUP,

    OPEN_CLOSE_SETTINGS_LANG_DROPDOWN,

    LANG_TERM_CHANGE,
    SELECT_LANGUAGE,
    CLEAN_UP,
    CREATE_NEW_POST,

    SET_NEW_BOT,
    DELETE_BOT,
    UPDATE_BOT,
} from "./types";
import { createBot, deleteBotFetch, getAllBotsList, signIn, updateBotData } from "../../services/index";


export const logIn = (logInData, callback) => dispatch => {

    return signIn(logInData)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            callback();
            window.location.reload();
        })
        .catch(err => {
            console.log(err)
            // dispatch(logInError(err.response.data))
        });
}


export const logInError = errMessage => ({
    type: LOG_IN_ERROR,
    payload: errMessage
});

export const logOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
};




export const setBotsList = () => dispatch => {
    return getAllBotsList()
        .then(res => {
            dispatch({
                type: SET_BOTS_LIST,
                payload: res.data.data
            })
        })
        .catch(err => console.log(err))
};


export const createNewBot = botData => dispatch => {
    return createBot(botData)
        .then(res => { dispatch(setNewBot(res.data)) })
        .catch(err => console.log(err))
};

export const deleteBot = id => dispatch => {
    return deleteBotFetch(id)
        .then(() => dispatch({
            type: DELETE_BOT,
            payload: id
        }))
        .catch(err => console.log(err));
};



export const updateBot = newData => dispatch => {
    return updateBotData(newData)
        .then(res => {
            dispatch({
                type: UPDATE_BOT,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}


export const setNewBot = botData => ({
    type: SET_NEW_BOT,
    payload: botData
});





export const showModal = () => ({ type: OPEN_CLOSE_MODAL });



export const showCreatePostForm = () => ({ type: SHOW_CREATE_NEW_POST_FORM });
export const showLangDropdown = () => ({ type: SHOW_LANG_DROPDOWN });
export const langTermChangeForm = term => ({
    type: LANG_TERM_CHANGE_FORM,
    payload: term
});
export const selectLanguageForm = langObj => ({
    type: SELECT_LANGUAGE_FORM,
    payload: langObj
});

export const createNewPost = postData => ({
    type: CREATE_NEW_POST,
    payload: postData
});
export const cleanUpForm = () => ({ type: CLEAN_UP_FORM });
export const showSuccessPopup = () => ({ type: SHOW_SUCCESS_POPUP });




export const setUploadedFiles = fileName => ({
    type: SET_UPLOADED_FILES,
    payload: fileName
});




export const showSettingsLangDd = () => ({ type: OPEN_CLOSE_SETTINGS_LANG_DROPDOWN });

export const langTermChange = term => ({
    type: LANG_TERM_CHANGE,
    payload: term
});

export const selectLanguage = langObj => ({
    type: SELECT_LANGUAGE,
    payload: langObj
});

export const cleanUp = () => ({ type: CLEAN_UP });




