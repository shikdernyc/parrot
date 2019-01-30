import React, { Component } from 'react';
import { intentSchema, actionSchema } from 'Data/models/Schemas';
import PropTypes from 'prop-types';
import { TextField, Grid, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { createIntent as createIntentAction } from 'Redux/intents/actions.js';
import { createAction as createActionAction } from 'Redux/actions/actions.js';
import {
  addIntentToStory as actionAddIntentToStory,
  addActionToStory as actionAddActionToStory
} from 'Redux/stories/actions';
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
    const { domainID, currentStory, addIntentToStory } = this.props;
    addIntentToStory(
      domainID,
      currentStory._id,
      intentSchema(domainID, this.state.newEvent),
      this.onCreateSuccess,
      this.onCreateFail
    );
  };

  handleCreateAction = () => {
    console.log('called');
    const { domainID, currentStory, addActionToStory } = this.props;
    addActionToStory(
      domainID,
      currentStory._id,
      actionSchema(domainID, this.state.newEvent),
      this.onCreateSuccess,
      this.onCreateFail
    );
  };

  handleNewEventAdd = e => {
    if (e.key === 'Enter' && e.target.value !== '') {
      console.log(this.state.eventType);
      if (this.state.eventType === EVENT_TYPE_INTENT) {
        this.handleCreateIntent();
      } else {
        this.handleCreateAction();
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
  addIntentToStory: (
    domainID,
    storyID,
    intentSchema,
    onSuccess = null,
    onFailure = null
  ) => {
    dispatch(
      actionAddIntentToStory(
        domainID,
        storyID,
        intentSchema,
        onSuccess,
        onFailure
      )
    );
  },
  addActionToStory: (
    domainID,
    storyID,
    actionSchema,
    onSuccess = null,
    onFailure = null
  ) => {
    dispatch(
      actionAddActionToStory(
        domainID,
        storyID,
        actionSchema,
        onSuccess,
        onFailure
      )
    );
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
  addIntentToStory: PropTypes.func,
  addActionToStory: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEvent);
