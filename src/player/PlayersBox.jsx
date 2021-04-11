import './PlayersBox.css'
import React from 'react'

const PlayersBox = props => {

    function getAvailablePlayers() {
        const playersList = props.players || []
        const teamPlayers = props.teamPlayers || []

        
        let availablePlayers = []
        for(const player of playersList) {
            
            let isOnTeam = false
            for(const teamPlayer of teamPlayers) {
                if(teamPlayer.player_id === player._id) {
                    isOnTeam = true
                }
            }
    
            if(!isOnTeam) {
                availablePlayers.push(player)
            }
        }

        return availablePlayers
    }

    const availablePlayers = getAvailablePlayers()

    return availablePlayers.map(player => (
        <div className="PlayerBox" key={player._id}>
            <div className="name-age">
                <span>
                    <strong>Name:</strong>
                    <span className="player-information">{player.name}</span>
                </span>

                <span>
                    <strong>Age:</strong>
                    <span className="player-information">{player.age}</span>
                </span>
            </div>

            <span>
                <strong>Nacionality:</strong>
                <span className="player-information">{player.nacionality}</span>
            </span>
        </div>
    ))
}

export default PlayersBox