import axios from 'axios'

import consts from '../consts'

export function searchPlayers(name = '') {
    const search = name ? `?name__regex=/${name}/i` : '' // i = case insensitive

    const request = axios.get(`${consts.API_URL}/players${search}`)

    return {
        type: consts.PLAYERS_FETCHED,
        payload: request
    }
}