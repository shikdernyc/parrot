import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Create from './create'

export default ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}/create`} component={Create} />
      <Redirect to="/error/404" />
    </Switch>
  );
};
