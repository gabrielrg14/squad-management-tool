import './TeamsAvgAge.css'
import React from 'react'

import Row from '../layout/Row'
import Grid from '../layout/Grid'

import TeamAvgLine from './TeamAvgLine'

const TeamsAvgAge = props => {

    function getTeamsWithAvgAge(teams) {
        return teams.map(team => {
            const players = team.players || []

            let totalTeamAge = 0
            for(const player of players) {
                totalTeamAge += player.age
            }

            team.avgAge = (totalTeamAge / players.length).toFixed(1)
            return team
        })
    }

    function getTop5Teams() {
        let teams = props.teams || []

        teams = getTeamsWithAvgAge(teams)

        const top5Teams = []
        top5Teams["lowest"] = teams.sort(function(a, b) {
            return a.avgAge < b.avgAge ? -1 : a.avgAge > b.avgAge ? 1 : 0;
        }).slice(0, 5)
        
        top5Teams["highest"] = teams.sort(function(a, b) {
            return a.avgAge > b.avgAge ? -1 : a.avgAge < b.avgAge ? 1 : 0;
        }).slice(0, 5)

        return top5Teams
    }

    function renderTop5Teams(top5) {
        return top5.map(team => (
            <TeamAvgLine key={team._id} team={team} />
        ))
    }

    const top5teams = getTop5Teams()

    return (
        <div className="TeamsAvgAge">
            <Row>
                <Grid cols="12 6">
                    <p>
                        <strong>Highest avg age</strong>
                    </p>

                    <div className="teams-box">
                        {renderTop5Teams(top5teams["highest"])}
                    </div>
                </Grid>

                <Grid cols="12 6">
                    <p>
                        <strong>Lowest avg age</strong>
                    </p>

                    <div className="teams-box">
                        {renderTop5Teams(top5teams["lowest"])}
                    </div>
                </Grid>
            </Row>
        </div>
    )
}

export default TeamsAvgAge