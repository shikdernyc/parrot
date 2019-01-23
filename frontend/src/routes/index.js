import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import root from './root';
import Agent from './agents';
import { connect } from 'react-redux';
import { getAllAgents } from 'Redux/agents/actions';
import AgentRouter from './agentRouter';

class MainApp extends Component {
  componentWillMount () {
    const { populateAgentList } = this.props;
    populateAgentList();
  }

  render () {
    return (
      <main>
        <Switch>
          <Route path={`/agents`} component={Agent} />
          <Route path={`/agent`} component={AgentRouter} />
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
