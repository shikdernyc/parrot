import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DomainList from "./domainTable/index";
import Create from './create'
export default ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={DomainList} />
      <Route exact path={`${match.url}/create`} component={Create} />
      <Redirect to="/error/404" />
    </Switch>
  );
};
