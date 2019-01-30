import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import root from './root';
import { connect } from 'react-redux';
import { getAllAgents } from 'Redux/agents/actions';
import AgentRouter from './agentRouter';
import DomainRouter from './domainRouter';
// import ActionRouter from './ActionRouter';

class MainApp extends Component {
  componentDidMount () {
    const { getAllAgents } = this.props;
    getAllAgents();
  }

  render () {
    return (
      <Switch>
        <Route path={`/agent/:agentID`} component={AgentRouter} />
        <Route path={`/domain/:domainID`} component={DomainRouter} />
        {/* <Route path={`/action`} component={ActionRouter} /> */}
        <Route exact path={`/`} component={root} />
        <Redirect to="/error/404" />
      </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllAgents: () => {
      dispatch(getAllAgents());
    }
  };
};

MainApp.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }),
  getAllAgents: PropTypes.func
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(MainApp)
);
