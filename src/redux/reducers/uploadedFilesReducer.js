import { SET_UPLOADED_FILES } from "../actions/types"

const initialState = [];

const uploadedFilesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_UPLOADED_FILES:
            return [...state, payload]

        default: return state
    }
}

export default uploadedFilesReducer