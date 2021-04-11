import consts from '../consts'

const team_empty = {
    name: '',
    description: '',
    website: '',
    type: '',
    tags: '',
    formation: '3 - 2 - 2 - 3',
    players: [{}]
}

const INITIAL_STATE = { team: team_empty }

export default function formReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case consts.FORM_CREATE_WILL_SHOWN:
            return { ...state, team: team_empty }

        case consts.FORM_WILL_SHOWN:
            return { ...state, team: action.payload.data }

        case consts.TEAM_CHANGED:
            const team = { ...state.team }
            team[action.payload.name] = action.payload.value
            return { ...state, team }

        default:
            return state
    }
}