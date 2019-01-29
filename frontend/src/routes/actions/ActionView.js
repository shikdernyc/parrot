import React, { Component } from 'react';
import ActionList from './ActionList';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import CreateEvent from 'Components/forms/CreateEvent';
import EventList from 'Components/list/EventList';
import { setCurrentAction as actionsetCurrentAction } from 'Redux/actions/actions';

class ActionView extends Component {
  componentDidMount () {
    const {
      setCurrentAction,
      match: {
        params: { actionID }
      }
    } = this.props;
    setCurrentAction(actionID);
  }

  render () {
    return (
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <ActionList match={this.props.match} history={this.props.history} />
        </Grid>
        <Grid item xs={6}>
          <CreateEvent />
          <EventList />
        </Grid>
      </Grid>
    );
  }
}

ActionView.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  setCurrentAction: PropTypes.func
};

const mapStateToProps = reduxState => ({
  domainID: reduxState.domains.currentDomain
    ? reduxState.domains.currentDomain._id
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
