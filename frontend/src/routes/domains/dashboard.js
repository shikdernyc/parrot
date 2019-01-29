import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  render () {
    return (
      <Fragment>
        {this.props.currentDomain &&
           <h2>{this.props.currentDomain.domainName}</h2>
        }
        <p>Select stories to get started</p>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => (
  {
    currentDomain: state.domains.currentDomain
  }
);

// const mapDispatchToProps = dispatch => {
//   return {
//     createAgent: (history, agentSchema) => {
//       dispatch(actionCreateAgent(history, agentSchema));
//     }
//   };
// };

Dashboard.propTypes = {
  currentDomain: PropTypes.object
};

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Dashboard);
