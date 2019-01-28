import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Domains from './domains';
import DomainRouter from './domainRouter';
import { setCurrentAgent as actionSetCurrentAgent } from 'Redux/agents/actions';
import { connect } from 'react-redux';

import Dashboard from './agents/dashboard';

class AgentRouter extends Component {
  handleSetCurrentAgent (agentID) {
    if (agentID !== this.props.currentAgentID) {
      this.props.setCurrentAgent(agentID);
    }
  }

  render () {
    // TODO:
    const { match } = this.props;
    const { agentID } = match.params;
    if (agentID) this.handleSetCurrentAgent(agentID);
    return (
      <Switch>
        <Route
          path={`${match.url}/domain/:domainID`}
          component={DomainRouter}
        />
        <Route exact path={`${match.url}`} component={Dashboard} />
        <Redirect to="/error/404" />
      </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentAgent: id => {
    dispatch(actionSetCurrentAgent(id));
  }
});

const mapStateToProps = reduxState => ({
  currentAgentID: reduxState.agents.currentAgent._id
});

AgentRouter.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }),
  history: PropTypes.object,
  setCurrentAgent: PropTypes.func,
  currentAgentID: PropTypes.string
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AgentRouter)
);
