import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import ActionForm from './ActionForm';

const Agent = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={ActionForm} />
      <Route exact path={`${match.url}/create`} component={ActionForm} />
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
