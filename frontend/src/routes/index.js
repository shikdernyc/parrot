import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import domains from './domains';
import intents from './intents';
import root from './root';
import agents from './agents';
import { connect } from 'react-redux';
import { getAllAgents } from 'Redux/agents/actions';

class MainApp extends Component {
  componentWillMount () {
    const { populateAgentList } = this.props;
    populateAgentList();
  }

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

const mapDispatchToProps = dispatch => {
  return {
    populateAgentList: () => {
      dispatch(getAllAgents());
    }
  };
};

MainApp.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }),
  populateAgentList: PropTypes.func
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(MainApp)
);
