import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import intentTable from './intentTable'
import Create from './create';

export default({match})=>{
    return(
        <Switch>
            <Route exact path={`${match.url}`} component={intentTable} />
            <Route exact path={`${match.url}/create`} component={Create} />
            <Redirect to="/error/404" />
        </Switch>
    )
}