import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BreakCrumbWithButtons from './breadCrumbAndButton';
import { connect } from 'react-redux';

class TopNav extends Component {
  render () {
    const { navProps } = this.props;
    return (
      <BreakCrumbWithButtons {...navProps} />
    );
  }
}

TopNav.propTypes = {
  navProps: PropTypes.object
};

function mapStateToProps (reduxState) {
  return {
    navProps: reduxState.navs.topNavProps
  };
}

export default connect(mapStateToProps)(TopNav);
