import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import NewAgentForm from './NewAgentForm';

const Agent = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}/create`} component={NewAgentForm} />
      <Route exact path={`${match.url}/dashboard`} component={NewAgentForm} />
      <Redirect to="/error/404" />
    </Switch>
  );
};

Agent.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};

export default Agent;
