import './PlayersPicked.css'
import React from 'react'

import Row from '../layout/Row'
import Grid from '../layout/Grid'

import InitialsName from '../layout/InitialsName'

const PlayersPicked = props => {

    function getAllPickedPlayers(teams) {
        let chosenPlayers = []

        for(const team of teams) {
            const players = team.players || []

            for(const player of players) {

                let playerInArray = false
                for(const chosen of chosenPlayers) {
                    if(chosen.player_id === player.player_id) {
                        chosen.choices += 1
                        playerInArray = true
                        break
                    }
                }

                if(!playerInArray) {
                    chosenPlayers.push({ ...player, choices: 1})
                }
            }
        }
        return chosenPlayers
    }

    function getMostLessPickedPlayers() {
        let teams = props.teams || []

        const chosenPlayers = getAllPickedPlayers(teams)

        chosenPlayers.sort(function(a, b) {
            return a.choices < b.choices ? -1 : a.choices > b.choices ? 1 : 0;
        })

        const pickedPlayer = []
        pickedPlayer["most"] = { ...chosenPlayers[chosenPlayers.length - 1] }
        pickedPlayer["most"].percentage = Math.round(((pickedPlayer["most"].choices / teams.length) * 100))

        pickedPlayer["less"] = { ...chosenPlayers[0] }
        pickedPlayer["less"].percentage = Math.round(((pickedPlayer["less"].choices / teams.length) * 100))

        return pickedPlayer
    }

    const mostLessPlayers = getMostLessPickedPlayers()

    return (
        <div className="PlayersPicked">
            <Row>
                <Grid cols="6">
                    <div className="player">
                        <h3><strong>Most picked player</strong></h3>
                        <div className="player-percentage">
                            <InitialsName name={mostLessPlayers["most"].name} circleSize="100" fontSize="1.5" bgColor="#FFFFFF" margin="0" />
                            <span className="percentage">{mostLessPlayers["most"].percentage}%</span>
                        </div>
                    </div>
                </Grid>

                <Grid cols="6">
                    <div className="player">
                        <h3><strong>Less picked player</strong></h3>
                        <div className="player-percentage">
                            <InitialsName name={mostLessPlayers["less"].name} circleSize="100" fontSize="1.5" bgColor="#FFFFFF" margin="0" />
                            <div className="percentage">{mostLessPlayers["less"].percentage}%</div>
                        </div>
                    </div>
                </Grid>
            </Row>
        </div>
    )
}

export default PlayersPicked