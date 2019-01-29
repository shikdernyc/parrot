import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  render () {
    return (
      <Fragment>
        {this.props.currentAgent &&
           <h2>{this.props.currentAgent.agentName}</h2>
        }
        <p>Select a domain to get started</p>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => (
  {
    currentAgent: state.agents.currentAgent
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
  currentAgent: PropTypes.object
};

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Dashboard);
