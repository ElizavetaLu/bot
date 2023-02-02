import { OPEN_CLOSE_MODAL } from "../actions/types"

const initialState = false;

const modalReducer = (state = initialState, { type }) => {
    switch (type) {
        case OPEN_CLOSE_MODAL:

            return !state;

        default: return state
    }
}

export default modalReducer