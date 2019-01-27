import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import StoryList from './StoryList';

const Agent = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={StoryList} />
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
