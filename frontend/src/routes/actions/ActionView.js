import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
// import CreateEvent from 'Components/forms/CreateEvent';
// import EventList from 'Components/list/EventList';
import { setCurrentAction as actionsetCurrentAction } from 'Redux/actions/actions';
import ActionForm from './ActionForm';
import ActionList from './ActionList';

class ActionView extends Component {
  render () {
    if (this.props.match.params.actionID !== this.props.currentActionID) {
      this.props.setCurrentAction(this.props.match.params.actionID);
    }
    return (
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <ActionList match={this.props.match} history={this.props.history} />
        </Grid>
        <Grid item xs={6}>
          <ActionForm history={this.props.history} />
        </Grid>
      </Grid>
    );
  }
}

ActionView.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  setCurrentAction: PropTypes.func,
  currentActionID: PropTypes.string
};

const mapStateToProps = state => ({
  // domainID: state.domains.currentDomain
  //   ? state.domains.currentDomain._id
  //   : undefined,
  currentActionID: state.actions.currentAction
    ? state.actions.currentAction.id
    : undefined
});

const mapDispatchToProps = dispatch => ({
  setCurrentAction: (id, onSuccess = null, onFailure = null) => {
    dispatch(actionsetCurrentAction(id, onSuccess, onFailure));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionView);
