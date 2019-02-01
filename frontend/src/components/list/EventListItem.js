import React, { Component } from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import DonutLarge from '@material-ui/icons/DonutLarge';
import DonutSmall from '@material-ui/icons/DonutSmall';
import PropTypes from 'prop-types';
import { EVENT_TYPE_INTENT } from 'Constants/app';

class EventListItem extends Component {
  render () {
    const { event, eventType, onClick } = this.props;
    const eventName = event['intentName'] || event['actionName'];
    return (
      <ListItem button onClick={onClick}>
        {eventType === EVENT_TYPE_INTENT ? <DonutLarge /> : <DonutSmall />}
        <ListItemText primary={eventName} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Copy">
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

EventListItem.propTypes = {
  event: PropTypes.object,
  eventType: PropTypes.string,
  onClick: PropTypes.func
};

export default EventListItem;
