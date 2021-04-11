import axios from 'axios'
import { toastr } from 'react-redux-toastr'

import consts from '../consts'

export function showFormCreate() {

    return {
        type: consts.FORM_CREATE_WILL_SHOWN,
    }
}

export function setFormTeam(id) {
    const team = axios.get(`${consts.API_URL}/team/${id}`)

    return {
        type: consts.FORM_WILL_SHOWN,
        payload: team
    }
}

export function onChangeInput(name, value) {

    return {
        type: consts.TEAM_CHANGED,
        payload: { name, value }
    }
}

export function submitForm(team, typeForm) {

    let url = false
    try {
        url = new URL(team.website)
    } catch(error) {
        toastr.error("Error", "The website informed is not valid!")
        return false
    }

    if(url) {
        const id = team._id ? team._id : ''
        const URL = `${consts.API_URL}/team/${id}`

        let method = "post"
        let successWord = "created"
        if (typeForm === "Update") {
            method = "put"
            successWord = "updated"
        } else if(typeForm === "Delete") {
            method = "delete"
            successWord = "deleted"
        }

        axios[method](URL, team)
            .then(resp => {
                toastr.success("Success", `Team successfully ${successWord}!`)
                setTimeout(function() { 
                    window.location.href = "/";
                }, 2500);
            }).catch(e => {
                e.response.data.errors.forEach(error => toastr.error("Error", error))
            })
    } else {
        toastr.error("Error", "The website informed is not valid!")
    }
}