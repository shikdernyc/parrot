import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import Domains from './domains';
// import DomainRouter from './domainRouter';
import { setCurrentAgent as actionSetCurrentAgent } from 'Redux/agents/actions';

import Dashboard from './agents/dashboard';

class AgentRouter extends Component {
  handleSetCurrentAgent (agentID) {
    if (agentID !== this.props.currentAgentID) {
      this.props.setCurrentAgent(agentID);
    }
  }

  render () {
    const { match } = this.props;
    const matches = this.props.location.pathname.match(/\/agent\/(.*)/);
    if (matches.length === 2) this.handleSetCurrentAgent(matches[1]);
    return (
      <Switch>
        {/* <Route
          path={`${match.url}/:agentID/domain/:domainID`}
          component={DomainRouter}
        /> */}
        <Route exact path={`${match.url}/:agentID`} component={Dashboard} />
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

const mapStateToProps = state => ({
  currentAgentID: state.agents.currentAgent._id
});

AgentRouter.propTypes = {
  setCurrentAgent: PropTypes.func,
  currentAgentID: PropTypes.string,
  location: PropTypes.object,
  match: PropTypes.object
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AgentRouter)
);
