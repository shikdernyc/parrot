import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import intentTable from './intentTable';
import Create from './create';

const Intent = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={intentTable} />
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
