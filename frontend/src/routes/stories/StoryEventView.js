import React, { Component } from 'react';
import StoryList from './Stories';
import PropTypes from 'prop-types';
import {
  Grid,
  Card,
  CardHeader,
  CardActions,
  CardContent
} from '@material-ui/core';
import { connect } from 'react-redux';
import CreateEvent from 'Components/forms/CreateEvent';
import EventList from 'Components/list/EventList';
import { setCurrentStoryID as actionSetCurrentStoryID } from 'Redux/stories/actions';
import { EVENT_TYPE_INTENT } from 'Constants/app';

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

  onEventClick = (eventType, event) => {
    const {
      history: { push },
      domainID
    } = this.props;
    const eventRoute = eventType === EVENT_TYPE_INTENT ? 'intents' : 'actions';
    push(`/domain/${domainID}/${eventRoute}/${event._id}`);
    console.log('Clicked event');
  };

  render () {
    const { intents, actions, sequence } = this.props;
    const styles = {
      eventList: {
        height: '65vh',
        overflowY: 'scroll'
      },
      eventView: {
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
            <Card raised style={styles.eventView}>
              <CardHeader title={this.props.currentStory.storyName || ''} />
              <CardContent>
                <CardActions>
                  <CreateEvent />
                </CardActions>
                <div style={styles.eventList}>
                  <EventList
                    intents={intents}
                    actions={actions}
                    sequence={sequence}
                    onEventClick={this.onEventClick}
                  />
                </div>
              </CardContent>
            </Card>
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
  currentStory: PropTypes.object,
  domainID: PropTypes.string,
  intents: PropTypes.array,
  actions: PropTypes.array,
  sequence: PropTypes.array
};

const mapStateToProps = reduxState => ({
  domainID: reduxState.domains.currentDomain
    ? reduxState.domains.currentDomain._id
    : undefined,
  currentStory: reduxState.stories.currentStory,
  intents: reduxState.stories.currentStory
    ? reduxState.stories.currentStory.intents
    : [],
  actions: reduxState.stories.currentStory
    ? reduxState.stories.currentStory.actions
    : [],
  sequence: reduxState.stories.currentStory
    ? reduxState.stories.currentStory.sequence
    : []
});

const mapDispatchToProps = dispatch => ({
  setCurrentStoryID: (
    domainID,
    storyID,
    onSuccess = null,
    onFailure = null
  ) => {
    dispatch(actionSetCurrentStoryID(domainID, storyID, onSuccess, onFailure));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryEventView);
