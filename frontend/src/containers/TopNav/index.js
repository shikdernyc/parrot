import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TitleWithAgentMenu from './titleWithAgentMenu';

class TopNav extends Component {
  render () {
    const { navProps } = this.props;
    return <TitleWithAgentMenu {...navProps} />;
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
