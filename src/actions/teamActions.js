import axios from 'axios'

import consts from '../consts'

export function getTeams() {
    const request = axios.get(`${consts.API_URL}/team`)

    return {
        type: consts.TEAMS_FETCHED,
        payload: request
    }
}