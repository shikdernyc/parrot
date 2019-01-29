import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EventListItem from './EventListItem';
import { List } from '@material-ui/core';
import { EVENT_TYPE_INTENT, EVENT_TYPE_ACTION } from 'Constants/app';

class EventList extends Component {
  createEventSequence () {
    const { intents, actions, sequence } = this.props;
    let eventList = [];
    for (let eventType of sequence) {
      if (eventType === EVENT_TYPE_ACTION) {
        const action = actions.shift() || {
          _id: Math.random(),
          actionName: 'Undefined action'
        };
        eventList.push(
          <EventListItem
            key={action._id}
            eventName={action.actionName}
            eventType={EVENT_TYPE_ACTION}
            onClick={() => {
              console.log('Action clicked');
            }}
          />
        );
      } else {
        const intent = intents.shift();
        eventList.push(
          <EventListItem
            key={intent._id}
            eventName={intent.intentName}
            eventType={EVENT_TYPE_INTENT}
            onClick={() => {
              console.log('Intent Clicked');
            }}
          />
        );
      }
    }

    return eventList;
  }

  render () {
    let eventList = this.props.sequence ? this.createEventSequence() : [];

    return <List component="nav">{eventList}</List>;
  }
}

const mapStateToProps = reduxState => {
  return {
    intents: reduxState.stories.currentStory
      ? reduxState.stories.currentStory.intents
      : [],
    actions: reduxState.stories.currentStory
      ? reduxState.stories.currentStory.actions
      : [],
    sequence: reduxState.stories.currentStory
      ? reduxState.stories.currentStory.sequence
      : []
  };
};

EventList.propTypes = {
  intents: PropTypes.array,
  actions: PropTypes.array,
  sequence: PropTypes.array
};

export default connect(
  mapStateToProps,
  null
)(EventList);
