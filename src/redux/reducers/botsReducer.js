import { SET_BOTS_LIST, SET_NEW_BOT, DELETE_BOT, UPDATE_BOT } from "../actions/types";

const initialState = [];

const botsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_BOTS_LIST:
            return payload;



        case SET_NEW_BOT:
            return [payload, ...state];

        case DELETE_BOT:
            const newState = state.filter(bot => bot._id !== payload);

            return newState;

        case UPDATE_BOT:

            const updatedList = state.map(bot => {
                if (bot._id === payload._id) { return payload }

                return bot
            })

            return updatedList

        default:
            return state
    }
}

export default botsReducer