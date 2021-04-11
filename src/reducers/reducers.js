import { combineReducers } from 'redux'
import FormReducer from './formReducer'
import TeamReducer from './teamReducer'
import PlayersReducer from './playersReducer'
import { reducer as ToastrReducer } from 'react-redux-toastr'

const rootReducers = combineReducers({
    form: FormReducer,
    teams: TeamReducer,
    players: PlayersReducer,
    toastr: ToastrReducer
})

export default rootReducers