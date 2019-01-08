import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import Create from './create';

const Agent = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}/create`} component={Create} />
      <Redirect to="/error/404" />
    </Switch>
  );
};

Agent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      field1: PropTypes.number.isRequired,
      field2: PropTypes.string
    })
  })
};

export default Agent;
