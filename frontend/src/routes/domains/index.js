import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import DomainList from './domainTable/index';
import Create from './create.js';

const Domain = ({ match }) => (
  <Switch>
    <Route exact path={`${match.url}`} component={DomainList} />
    <Route exact path={`${match.url}/create`} component={Create} />
    <Redirect to="/error/404" />
  </Switch>
);

Domain.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};

export default Domain;
