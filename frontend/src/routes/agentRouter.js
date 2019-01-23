import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Domains from './domains';
import Intents from './intents';
import { setCurrentAgent as actionSetCurrentAgent } from 'Redux/agents/actions';
import { connect } from 'react-redux';

class AgentRouter extends Component {
  handleSetCurrentAgent (id) {
    // TODO: Check if current agent is set to id. If not, set it
  }

  render () {
    // TODO:
    const { match } = this.props;
    const { id } = match.params;
    if (id) this.handleSetCurrentAgent(id);
    return (
      <Switch>
        <Route path={`${match.url}/:agentID/domains`} component={Domains} />
        <Route path={`${match.url}/:agentID/intents`} component={Intents} />
        <Route path={`${match.url}/:agentID/entities`} component={Domains} />
        <Redirect to="/error/404" />
      </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentAgent: (history, id) => {
    dispatch(actionSetCurrentAgent(history, id));
  }
});

AgentRouter.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }),
  history: PropTypes.object,
  setCurrentAgent: PropTypes.func
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AgentRouter)
);
