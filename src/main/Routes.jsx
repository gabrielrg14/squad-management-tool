import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import TeamDashboard from '../team/TeamDashboard'
import TeamForm from '../team/form/TeamForm'

const Routes = props => (
    <Switch>
        <Route exact path="/" component={TeamDashboard} />
        <Route exact path="/form/Create/" component={TeamForm} />
        <Route path="/form/:type/:id" component={TeamForm} />
        <Redirect from="*" to="/" />
    </Switch>
)

export default Routes