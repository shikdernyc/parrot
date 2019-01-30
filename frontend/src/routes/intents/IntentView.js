import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import IntentList from './IntentList';
import { setCurrentIntent as actionsetCurrentIntent } from 'Redux/intents/actions';
import IntentForm from './IntentForm';

class IntentView extends Component {
  render () {
    if (this.props.match.params.intentID !== this.props.currentIntentID) {
      this.props.setCurrentIntent(this.props.match.params.intentID);
    }
    return (
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <IntentList match={this.props.match} history={this.props.history} />
        </Grid>
        <Grid item xs={6}>
          <IntentForm history={this.props.history} />
        </Grid>
      </Grid>
    );
  }
}

IntentView.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  setCurrentIntent: PropTypes.func,
  currentIntentID: PropTypes.string
};

const mapStateToProps = state => ({
  // domainID: state.domains.currentDomain
  //   ? state.domains.currentDomain._id
  //   : undefined,
  currentIntentID: state.intents.currentIntent
    ? state.intents.currentIntent.id
    : undefined
});

const mapDispatchToProps = dispatch => ({
  setCurrentIntent: (id, onSuccess = null, onFailure = null) => {
    dispatch(actionsetCurrentIntent(id, onSuccess, onFailure));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntentView);
