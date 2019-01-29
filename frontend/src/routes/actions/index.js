import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import ActionList from './ActionList';
import ActionView from './ActionView';

class Action extends Component {
  render () {
    const { match } = this.props;
    console.log(match);
    return (
      <Switch>
        <Route exact path={`${match.url}`} component={ActionList} />
        <Route
          exact
          path={`${match.url}/:ActionID`}
          component={ActionView}
        />
        <Redirect to="/error/404" />
      </Switch>
    );
  }
}

Action.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};

export default Action;
