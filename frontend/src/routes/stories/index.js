import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import StoryList from './StoryList';

class Story extends Component {
  render () {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={`${match.url}`} component={StoryList} />
        <Route exact path={`${match.url}/:storyID`} component={StoryList} />
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
