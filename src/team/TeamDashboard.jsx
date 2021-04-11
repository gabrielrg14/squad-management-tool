import '../index.css'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Content from '../template/Content'
import Row from '../layout/Row'
import Grid from '../layout/Grid'
import ContentBox from '../layout/ContentBox'

import MyTeamsTable from './MyTeamsTable'
import TeamsAvgAge from './TeamsAvgAge'
import PlayersPicked from '../player/PlayersPicked'

import { getTeams } from '../actions/teamActions'

class TeamDashboard extends Component {

    componentDidMount() {
        this.props.getTeams()
    }

    render() {
        
        return (
            <Content>
                <Row>
                    <Grid cols="12 6">
                        <ContentBox title="My teams" addButton={true}>
                            <MyTeamsTable teams={this.props.teams} />
                        </ContentBox>
                    </Grid>

                    <Grid cols="12 6">
                        <ContentBox title="Top 5">
                            <TeamsAvgAge teams={this.props.teams} />
                        </ContentBox>

                        <PlayersPicked teams={this.props.teams} />
                    </Grid>
                </Row>
            </Content>
        )
    }
}

const mapStateToProps = state => ({ teams: state.teams.teams })
const mapDispatchToProps = dispatch => bindActionCreators({ getTeams }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TeamDashboard)