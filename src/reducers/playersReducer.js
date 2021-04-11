import consts from '../consts'

const INITIAL_STATE = { players: [] }

export default function playerReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case consts.PLAYERS_FETCHED:
            return { ...state, players: action.payload.data }

        default:
            return state
    }
}