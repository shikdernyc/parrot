import React, { Component } from 'react';
import { intentSchema, actionSchema } from 'Data/models/Schemas';
import PropTypes from 'prop-types';
import { TextField, Grid, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { createIntent as createIntentAction } from 'Redux/intents/actions.js';
import { createAction as createActionAction } from 'Redux/actions/actions.js';
import { modifyCurrentStory } from 'Redux/stories/actions';
import { EVENT_TYPE_ACTION, EVENT_TYPE_INTENT } from 'Constants/app';

class CreateEvent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      newEvent: '',
      eventType: EVENT_TYPE_INTENT
    };
  }

  onIntentCreateFail = error => {
    console.log(error);
  };

  onCreateSuccess = event => {
    console.log(event);
    this.setState({
      newEvent: ''
    });
    const { onSuccess } = this.props;
    if (onSuccess) {
      onSuccess(event);
    }
  };

  onCreateFail = error => {
    // TODO: Handle internal error
    const { onFailure } = this.props;
    if (onFailure) {
      onFailure(error);
    }
  };

  handleCreateIntent = () => {
    const {
      domainID,
      createIntent,
      currentStory,
      addEventToStory
    } = this.props;
    createIntent(
      intentSchema(domainID, this.state.newEvent),
      intent => {
        console.log(intent);
        addEventToStory(
          EVENT_TYPE_INTENT,
          intent,
          currentStory,
          this.onCreateSuccess,
          this.onCreateFail
        );
      },
      this.onCreateSuccess
    );
  };

  handleNewEventAdd = e => {
    if (e.key === 'Enter' && e.target.value !== '') {
      if (this.state.eventType === EVENT_TYPE_INTENT) {
        this.handleCreateIntent();
      }
    }
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render () {
    return (
      <Grid container justify="center" spacing={Number(8)}>
        <Grid item xs={9}>
          <TextField
            name="newEvent"
            fullWidth
            margin="normal"
            placeholder="Enter event name and press enter"
            value={this.state.newEvent}
            onChange={this.handleChange}
            onKeyPress={this.handleNewEventAdd}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            select
            label="Event Type"
            name="eventType"
            value={this.state.eventType}
            onChange={this.handleChange}
            variant="standard"
          >
            <MenuItem value={EVENT_TYPE_INTENT}>{'Intent'}</MenuItem>
            <MenuItem value={EVENT_TYPE_ACTION}>{'Action'}</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createIntent: (intentSchema, onSuccess = null, onFailure = null) => {
    dispatch(createIntentAction(intentSchema, onSuccess, onFailure));
  },
  addEventToStory: (
    eventType,
    event,
    currentStory,
    onSuccess = null,
    onFailure = null
  ) => {
    console.log(currentStory);
    let changes = {};
    if (eventType === EVENT_TYPE_INTENT) {
      let { intents, sequence } = currentStory;
      changes.intents = [...intents, event];
      changes.sequence = [...sequence, EVENT_TYPE_INTENT];
    } else {
      let { actions, sequence } = currentStory;
      changes.actions = [...actions, event];
      changes.sequence = [...sequence, EVENT_TYPE_ACTION];
    }
    dispatch(modifyCurrentStory(currentStory, changes, onSuccess, onFailure));
  }
});

const mapStateToProps = reduxState => ({
  domainID: reduxState.domains.currentDomain
    ? reduxState.domains.currentDomain._id
    : undefined,
  currentStory: reduxState.stories.currentStory
});

CreateEvent.propTypes = {
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
  create: PropTypes.func,
  domainID: PropTypes.string,
  currentStory: PropTypes.object,
  createIntent: PropTypes.func,
  addEventToStory: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEvent);
