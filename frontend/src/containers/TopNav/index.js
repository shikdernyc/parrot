import React, { Component } from "react";
import BreakCrumbWithButtons from './breadCrumbAndButton'
import {connect} from 'react-redux'

class TopNav extends Component {
  render() {
    const {navProps} = this.props
    return (
      <BreakCrumbWithButtons {...navProps} />
    );
  }
}

function mapStateToProps(reduxState){
  return {
    navProps: reduxState.navs.topNavProps
  }
}

export default connect(mapStateToProps)(TopNav);
