import consts from '../consts'

const INITIAL_STATE = { teams: [] }

export default function teamReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case consts.TEAMS_FETCHED:
            return { ...state, teams: action.payload.data }

        default:
            return state
    }
}