import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import domains from './domains';
import intents from './intents';
import root from './root';
import agents from './agents';

class MainApp extends Component {
  render () {
    // const { match } = this.props;
    return (
      <main>
        <Switch>
          <Route path={`/agents`} component={agents} />
          <Route path={`/domains`} component={domains} />
          <Route path={`/intents`} component={intents} />
          <Route path={`/entities`} component={domains} />
          <Route exact path={`/`} component={root} />
          <Redirect to="/error/404" />
        </Switch>
      </main>
    );
  }
}

MainApp.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};

export default withRouter(MainApp);
