import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EventListItem from './EventListItem';
import { EVENT_TYPE_INTENT, EVENT_TYPE_ACTION } from 'Constants/app';
import { List } from '@material-ui/core';

class EventList extends Component {
  onClick = (e, eventType, event) => {
    this.props.onEventClick(eventType, event);
  };

  handleRemove = (eventType, event) => {};

  createEventSequence () {
    const { intents, actions, sequence, onEventClick } = this.props;
    let eventList = [];
    for (let eventType of sequence) {
      if (eventType === EVENT_TYPE_ACTION) {
        const action = actions.shift() || {
          _id: Math.random()
        };
        eventList.push(
          <EventListItem
            key={action._id}
            eventType={EVENT_TYPE_ACTION}
            event={action}
            onClick={event => {
              this.onClick(event, EVENT_TYPE_ACTION, action);
            }}
          />
        );
      } else {
        const intent = intents.shift() || {
          _id: Math.random()
        };
        eventList.push(
          <EventListItem
            key={intent._id}
            event={intent}
            eventType={EVENT_TYPE_INTENT}
            onClick={event => {
              this.onClick(event, EVENT_TYPE_INTENT, intent);
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

EventList.propTypes = {
  intents: PropTypes.array,
  actions: PropTypes.array,
  sequence: PropTypes.array,
  onEventClick: PropTypes.func
};

export default EventList;
