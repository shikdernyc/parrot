import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import Stories from './Stories';
import StoryEventView from './StoryEventView';

class Story extends Component {
  render () {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={`${match.url}`} component={Stories} />
        <Route
          exact
          path={`${match.url}/:storyID`}
          component={StoryEventView}
        />
        <Redirect to="/error/404" />
      </Switch>
    );
  }
}

Story.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};

export default Story;
