import {
    OPEN_CLOSE_SETTINGS_LANG_DROPDOWN,
    LANG_TERM_CHANGE,
    SELECT_LANGUAGE,
    CLEAN_UP
} from "../actions/types";

import { languages } from "../../dropdown-data/languages";

const initialState = {
    isOpenLang: false,

    selectedLang: {
        langTerm: '',
        icon: ''
    },
    langItemsList: languages,
}


const dropdownReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case OPEN_CLOSE_SETTINGS_LANG_DROPDOWN:
            return { ...state, isOpenLang: !state.isOpenLang };

        case LANG_TERM_CHANGE:
            return {
                ...state,
                selectedLang: {
                    ...state.selectedLang,
                    langTerm: payload
                }
            };

        case SELECT_LANGUAGE:
            return {
                ...state,
                selectedLang: {
                    ...state.selectedLang,
                    ...payload
                }
            };

        case CLEAN_UP:
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

export default dropdownReducer