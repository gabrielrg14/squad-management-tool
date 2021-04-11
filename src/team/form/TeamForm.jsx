import './TeamForm.css'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Content from '../../template/Content'
import SectionTitle from '../../layout/SectionTitle'
import Row from '../../layout/Row'
import Grid from '../../layout/Grid'
import ContentBox from '../../layout/ContentBox'
import LabelInput from '../../formComponents/LabelInput'
import LabelTextarea from '../../formComponents/LabelTextarea'
import LabelRadio from '../../formComponents/LabelRadio'
import LabelSelect from '../../formComponents/LabelSelect'
import PlayersBox from '../../player/PlayersBox'

import { searchPlayers } from '../../actions/playersAction'
import { showFormCreate, setFormTeam, submitForm, onChangeInput } from '../../actions/formActions'

class TeamForm extends Component {

    componentDidMount() {
        this.props.searchPlayers()
        const id = this.props.match.params.id
        if(id) {
            this.props.setFormTeam(id)
        } else {
            this.props.showFormCreate()
        }
    }

    handleInputPlayers(name) {
        this.props.searchPlayers(name)
    }

    submitTeam() {
        submitForm(this.props.teamForm.team, this.props.match.params.type)
    }

    render() {

        const { teamForm, players, onChangeInput } = this.props

        const formType = this.props.match.params.type || "Create"
        const isDelete = formType === "Delete"
        return (
            <Content>
                <Row>
                    <Grid cols="12">
                        <ContentBox title={`${formType} your team`}>
                            <div className="TeamForm">
                                <SectionTitle title="Team Information" />

                                <Row>
                                    <Grid cols="12 6">
                                        <Grid cols="12 10 8" offsets="0 2 3">
                                            <LabelInput name="name" label="Team name" value={teamForm.team.name}
                                                placeholder="Insert team name" onChange={onChangeInput} disabled={isDelete} />

                                            <LabelTextarea name="description" label="Description" value={teamForm.team.description}
                                                rows="7" onChange={onChangeInput} disabled={isDelete} />
                                        </Grid>
                                    </Grid>

                                    <Grid cols="12 6">
                                        <Grid cols="12 10 8" offsets="0 1">
                                            <LabelInput name="website" label="Team website" value={teamForm.team.website}
                                                placeholder="http://myteam.com" onChange={onChangeInput} disabled={isDelete} />

                                            <LabelRadio name="type" label="Team type" value={teamForm.team.type} onChange={onChangeInput} disabled={isDelete} />

                                            <LabelTextarea name="tags" label="Tags" value={teamForm.team.tags}
                                                rows="3" onChange={onChangeInput} disabled={isDelete} />
                                        </Grid>
                                    </Grid>
                                </Row>          

                                <SectionTitle title="Configure Squad" />

                                <Row>
                                    <Grid cols="12 6">
                                        <Grid cols="12 10 8" offsets="0 2 3">
                                            <LabelSelect name="formation" label="Formation"
                                                value={teamForm.team.formation} onChange={onChangeInput} disabled={isDelete} />

                                            <div className="football-field"></div>

                                            <button type="button" className="btn save-button" onClick={e => this.submitTeam()}>
                                                {formType === "Create" ? "Save" : formType}
                                            </button>
                                        </Grid>
                                    </Grid>

                                    <Grid cols="12 6">
                                        <Grid cols="12 10 8" offsets="0 1">
                                            <div className="form-group">
                                                <label htmlFor="search-player">
                                                    <strong>Search Players</strong>
                                                </label>

                                                <input className="form-control" onChange={e => this.handleInputPlayers(e.target.value)} />
                                            </div>

                                            <PlayersBox players={players} teamPlayers={teamForm.team.players} />
                                        </Grid>
                                    </Grid>
                                </Row>
                            </div>
                        </ContentBox>
                    </Grid>
                </Row>
            </Content>
        )
    }
}

const mapStateToProps = state => ({ players: state.players.players, teamForm: state.form })
const mapDispatchToProps = dispatch => bindActionCreators({ 
    showFormCreate, setFormTeam, submitForm, onChangeInput, searchPlayers 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm)