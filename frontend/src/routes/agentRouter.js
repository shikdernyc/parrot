import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Domains from './domains';
import Intents from './intents';
import { setCurrentAgent as actionSetCurrentAgent } from 'Redux/agents/actions';
import { connect } from 'react-redux';

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
        <Route path={`${match.url}/domains`} component={Domains} />
        <Route path={`${match.url}/intents`} component={Intents} />
        <Route path={`${match.url}/entities`} component={Domains} />
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
