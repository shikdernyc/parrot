import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import IntentList from './IntentList';
import Create from './create.js';

const Intent = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={IntentList} />
      <Route exact path={`${match.url}/create`} component={Create} />
      <Redirect to="/error/404" />
    </Switch>
  );
};

Intent.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};

export default Intent;
