import { languages } from "../../dropdown-data/languages";
import {
    SHOW_CREATE_NEW_POST_FORM,
    SHOW_LANG_DROPDOWN,
    LANG_TERM_CHANGE_FORM,
    SELECT_LANGUAGE_FORM,
    CLEAN_UP_FORM,
    CREATE_NEW_POST,
    SHOW_SUCCESS_POPUP
} from "../actions/types"

const initialState = {
    isOpen: false,

    postsList: [],


    isLangDropdownOpen: false,
    selectedLang: {
        langTerm: '',
        icon: ''
    },
    langItemsList: languages,


    successPopup: false
};

const createPostReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_CREATE_NEW_POST_FORM:
            return { ...state, isOpen: !state.isOpen };

        case SHOW_LANG_DROPDOWN:
            return { ...state, isLangDropdownOpen: !state.isLangDropdownOpen };

        case LANG_TERM_CHANGE_FORM:
            return {
                ...state,
                selectedLang: {
                    ...state.selectedLang,
                    langTerm: payload
                }
            };
        case SELECT_LANGUAGE_FORM:
            return {
                ...state,
                selectedLang: {
                    ...state.selectedLang,
                    ...payload
                }
            };

        case CREATE_NEW_POST:
            return {
                ...state,
                postsList: [...state.postsList, payload]
            };

        case SHOW_SUCCESS_POPUP:
            return {
                ...state,
                successPopup: !state.successPopup
            };

        case CLEAN_UP_FORM:
            return {
                ...state,
                selectedLang: {
                    ...state.selectedLang,
                    langTerm: '',
                    icon: ''
                }
            };


        default: return state
    }
}

export default createPostReducer