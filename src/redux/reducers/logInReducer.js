import {
    // SAVE_TOKEN,
    LOG_IN_ERROR,
} from "../actions/types"


const initialState = {
    // authenticated: '',
    errorMessage: ''
}

const logInReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        
        // case SAVE_TOKEN:
        //     return { ...state, authenticated: payload }

        case LOG_IN_ERROR:
            return { ...state, errorMessage: payload }

        default: return state;
    }
}

export default logInReducer