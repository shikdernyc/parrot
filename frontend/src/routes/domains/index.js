import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DomainList from "./domainList";

export default ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}`} component={DomainList} />
      <Redirect to="/error/404" />
    </Switch>
  );
};
