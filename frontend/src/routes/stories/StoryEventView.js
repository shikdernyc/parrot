import React, { Component } from 'react';
import StoryList from './StoryList';
import PropTypes from 'prop-types';
import { Grid, Typography, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import CreateEvent from 'Components/forms/CreateEvent';
import EventList from 'Components/list/EventList';
import {
  setCurrentStoryID as actionSetCurrentStoryID,
  addIntentToStory as actionAddIntentToStory
} from 'Redux/stories/actions';

class StoryEventView extends Component {
  componentDidUpdate () {
    const {
      setCurrentStoryID,
      currentStory: { _id },
      domainID,
      match: {
        params: { storyID }
      }
    } = this.props;
    if (storyID !== _id) setCurrentStoryID(domainID, storyID);
  }

  render () {
    const styles = {
      eventList: {
        height: '85vh',
        paddingLeft: '20px',
        paddingRight: '20px'
      }
    };
    return (
      <div>
        <Grid container spacing={40}>
          <Grid item xs={6}>
            <StoryList match={this.props.match} history={this.props.history} />
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <div style={styles.eventList}>
                <Grid item xs={12}>
                  <Typography component="h2" variant="display3" gutterBottom>
                    {this.props.currentStory.storyName || ''}
                  </Typography>
                </Grid>
                <CreateEvent />
                <EventList />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

StoryEventView.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  setCurrentStoryID: PropTypes.func,
  currentStory: PropTypes.string,
  domainID: PropTypes.string
};

const mapStateToProps = reduxState => ({
  domainID: reduxState.domains.currentDomain
    ? reduxState.domains.currentDomain._id
    : undefined,
  currentStory: reduxState.stories.currentStory
});

const mapDispatchToProps = dispatch => ({
  setCurrentStoryID: (
    domainID,
    storyID,
    onSuccess = null,
    onFailure = null
  ) => {
    dispatch(actionSetCurrentStoryID(domainID, storyID, onSuccess, onFailure));
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryEventView);
