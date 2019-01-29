import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { setCurrentDomain as actionSetCurrentDomain } from 'Redux/domains/actions';
import { connect } from 'react-redux';

import Dashboard from './domains/dashboard';
import Stories from './stories';

class DomainRouter extends Component {
  render () {
    const { match, currentDomainID } = this.props;
    const matches = this.props.location.pathname.match(/\/domain\/(.*)/);
    if (matches.length === 2 && matches[1] && matches[1] !== currentDomainID) {
      this.props.setCurrentDomain(matches[1]);
    }
    return (
      <Switch>
        <Route path={`${match.url}/:domainID/stories`} component={Stories} />
        <Route path={`${match.url}/:domainID`} component={Dashboard} />
        <Redirect to="/error/404" />
      </Switch>
    );
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    setCurrentDomain: (id, history = null) => {
      dispatch(actionSetCurrentDomain(id, history));
    }
  };
};

const mapStateToProps = reduxState => ({
  currentDomainID: reduxState.domains.currentDomain
    ? reduxState.domains.currentDomain._id
    : undefined
});

DomainRouter.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }),
  history: PropTypes.object,
  location: PropTypes.object,
  setCurrentDomain: PropTypes.func,
  currentDomainID: PropTypes.string
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DomainRouter)
);
